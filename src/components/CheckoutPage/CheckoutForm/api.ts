import { AreaData } from '@components/types';

export const fetchAreas = async () => {
  try {
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: 'db13235cc7d43525383c2704e4f8b5a9',
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

export const fetchCities = async (Ref: string, SelectedCity: string) => {
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
          apiKey: 'db13235cc7d43525383c2704e4f8b5a9',
          modelName: 'Address',
          calledMethod: 'getSettlements',
          methodProperties: {
            AreaRef: Ref,
            FindByString: SelectedCity,
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

    console.log(allCities);
    return allCities;
  } catch (error) {
    console.error('Помилка завантаження даних з API', error);
    return null;
  }
};

export const fetchWarehouses = async (CityName: string) => {
  try {
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: 'db13235cc7d43525383c2704e4f8b5a9',
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName,
          // CityRef: "00000000-0000-0000-0000-000000000000",
          // Page: '1',
          // Limit: '50',
          // Language: 'UA',
          // TypeOfWarehouseRef: '00000000-0000-0000-0000-000000000000',
          // WarehouseId: '151',
        },
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
