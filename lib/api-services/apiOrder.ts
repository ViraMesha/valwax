
export const sendOrder = async (order: {}) => {

    const response = await fetch(`/api/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error('Failed to fetch data');
    };
};

