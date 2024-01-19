
export const sendOrder = async (order: {}) => {

    const response = await fetch(`/api/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    if (response.status !== 200 ) {
      throw new Error('Failed to fetch data');
    };
};

