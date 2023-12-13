export const subscribeToNewsletter = async (email: string) => {
  const response = await fetch(`/api/subscription?email=${email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    },
  });

  if (!response.ok) throw new Error("Couldn't post the data.");
};
