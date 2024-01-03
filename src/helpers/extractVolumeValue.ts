import { toLowerCase } from './toLowerCase';

interface IExtractVolumeValueParams {
  name: string;
  value: string;
  categoryTitle: string;
}

export const extractVolumeValue = ({
  name,
  value,
  categoryTitle,
}: IExtractVolumeValueParams) => {
  return toLowerCase(name) === toLowerCase(categoryTitle)
    ? value.split(' ')[0]
    : '';
};
