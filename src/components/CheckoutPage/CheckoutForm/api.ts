import { AreaData } from '@components/types';

const ApiKeyNP = process.env.NOVAPOSHTA_KEY

export const fetchAreas = async () => {
  try {
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: ApiKeyNP,
        modelName: 'Address',
        calledMethod: 'getSettlementAreas',
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.data);
      return data.data;
    } else {
      console.error('Помилка завантаження даних з API');
      return null;
    }
  } catch (error) {
    console.error('Помилка завантаження даних з API', error);
    return null;
  }
};

export const fetchCities = async (Ref: string) => {
  try {
    let allCities: AreaData[] = [];
    let page = 1;

    while (true) {
      const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: ApiKeyNP,
          modelName: 'Address',
          calledMethod: 'getSettlements',
          methodProperties: {
            AreaRef: Ref,
            // FindByString: SelectedCity,
            Page: String(page),
          },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        allCities = allCities.concat(data.data);

        if (data.data.length === 0) {
          break;
        }

        page++;
      } else {
        console.error('Помилка завантаження даних з API');
        return null;
      }
    }

    console.log('allCities', allCities);
    return allCities;
  } catch (error) {
    console.error('Помилка завантаження даних з API', error);
    return null;
  }
};

const fetchWarehousesByTypeOfWarehouseRef = async (
  TypeOfWarehouseRef: string,
  CityName: string
) => {
  try {
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: ApiKeyNP,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName,
          TypeOfWarehouseRef,
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      console.error('Error fetching data from API');
      return null;
    }
  } catch (error) {
    console.error('Error fetching data from API', error);
    return null;
  }
};

export const fetchWarehouses = async (
  selectedDelivery: string,
  CityName: string
) => {
  const typeOfWarehouseRefs = [];
  if (
    selectedDelivery === 'Нова Пошта (Поштомат)' ||
    selectedDelivery === 'Nova Poshta (Parcel Locker)'
  ) {
    typeOfWarehouseRefs.push('95dc212d-479c-4ffb-a8ab-8c1b9073d0bc');
    typeOfWarehouseRefs.push('f9316480-5f2d-425d-bc2c-ac7cd29decf0');
  } else {
    // typeOfWarehouseRefs.push('6f8c7162-4b72-4b0a-88e5-906948c6a92f');
    typeOfWarehouseRefs.push('841339c7-591a-42e2-8233-7a0a00f0ed6f');
    typeOfWarehouseRefs.push('9a68df70-0267-42a8-bb5c-37f427e36ee4');
  }

  const allWarehouses = [];
  for (const TypeOfWarehouseRef of typeOfWarehouseRefs) {
    const warehouses = await fetchWarehousesByTypeOfWarehouseRef(
      TypeOfWarehouseRef,
      CityName
    );
    if (warehouses !== null) {
      allWarehouses.push(...warehouses);
    } else {
      console.log(warehouses);
    }
  }

  return allWarehouses;
};


const urlUkrPoshta = 'https://www.ukrposhta.ua/address-classifier-ws/'
const methodAreas = 'get_regions_by_region_ua'
const methodCity = 'get_city_by_region_id_and_district_id_and_city_ua'
const methodPostoffices  = 'get_postoffices_by_postcode_cityid_cityvpzid'

const ApiKeyUP = process.env.UKRPOSHTA_KEY


export const fetchAreasUkr = async () => {
  try {
    const response = await fetch(`${urlUkrPoshta}${methodAreas}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.Entries.Entry);
      return data.Entries.Entry;
    } else {
      console.error('Помилка завантаження даних з API');
      return null;
    }
  } catch (error) {
    console.error('Помилка завантаження даних з API', error);
    return null;
  }
};


export const fetchCitiesUkr = async (RegionId: string) => {
  try {
    const response = await fetch('https://www.ukrposhta.ua/address-classifier-ws/get_city_by_region_id_and_district_id_and_city_ua', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        // 'Cache-Control': 'no-cache',
        // 'Accept-Encoding': 'gzip, deflate, br',
        // 'Connection': 'keep-alive',
        // 'Authorization': `Bearer ${process.env.UKRPOSHTA_KEY}` ,
      }
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.Entries.Entry);
      return data.Entries.Entry.filter((obj: {REGION_ID: string}) => obj.REGION_ID === RegionId);
    } else {
      console.error('Помилка завантаження даних з API');
      return null;
    }
  } catch (error) {
    console.error('Помилка завантаження даних з API', error);
    return null;
  }
};

export const fetchWarehousesUkr = async (CityId: string) => {
  console.log('CityId', CityId)
  try {
    const response = await fetch(`${urlUkrPoshta}${methodPostoffices}?city_id=${CityId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.UKRPOSHTA_KEY}`,
      }
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.Entries.Entry);
      return data.Entries.Entry;
    } else {
      console.error('Помилка завантаження даних з API');
      return null;
    }
  } catch (error) {
    console.error('Помилка завантаження даних з API', error);
    return null;
  }
};
