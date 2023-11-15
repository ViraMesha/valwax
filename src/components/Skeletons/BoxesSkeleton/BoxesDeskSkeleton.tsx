import ContentLoader from 'react-content-loader';

export const BoxesDeskSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={976}
      height={512}
      viewBox="0 0 976 512"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="480" height="480" />
      <rect x="498" y="0" rx="0" ry="0" width="245" height="48" />
      <rect x="498" y="54" rx="0" ry="0" width="476" height="306" />
      <rect x="498" y="378" rx="0" ry="0" width="161" height="54" />
      <rect x="498" y="452" rx="20" ry="20" width="137" height="60" />
      <rect x="657" y="452" rx="20" ry="20" width="192" height="60" />
    </ContentLoader>
  );
};

export const ReversedBoxesDeskSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={976}
      height={512}
      viewBox="0 0 976 512"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="494" y="0" rx="20" ry="20" width="480" height="480" />
      <rect x="0" y="0" rx="0" ry="0" width="245" height="48" />
      <rect x="0" y="54" rx="0" ry="0" width="476" height="306" />
      <rect x="0" y="378" rx="0" ry="0" width="161" height="54" />
      <rect x="0" y="452" rx="20" ry="20" width="137" height="60" />
      <rect x="159" y="452" rx="20" ry="20" width="192" height="60" />
    </ContentLoader>
  );
};
