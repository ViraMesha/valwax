interface IUpdateItemValuesParams {
  item: IFilterItem;
  value: string;
  extractedVolumeValue: string;
}

export const updateItemValues = ({
  item,
  value,
  extractedVolumeValue,
}: IUpdateItemValuesParams) => {
  const isParamIncluded = item.values.includes(value);
  return {
    ...item,
    values: isParamIncluded
      ? item.values.filter(item => item !== value)
      : [...item.values, extractedVolumeValue || value],
  };
};
