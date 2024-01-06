export const getFilterQuery = (params: [string, string][]) => {
  return params.length
    ? params
        .map(([key, value]) => `${key}=${value}`)
        .flat()
        .join('&')
    : '';
};
