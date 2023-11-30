export const convertStringToNumber = (value, defaultValue) => {
    if (typeof value === 'string') {
      const convertedValue = Number(value);
      return isNaN(convertedValue) ? defaultValue : convertedValue;
    }
    return defaultValue;
  };