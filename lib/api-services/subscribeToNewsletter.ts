export const subscribeToNewsletter = async (email: string) => {
  const response = await fetch(`/api/subscription?email=${email}`);

  if (!response.ok) throw new Error("Couldn't post the data.");
};
