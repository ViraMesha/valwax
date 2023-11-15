import ContentLoader from 'react-content-loader';

export const BoxesDeskLargeSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={1200}
      height={552}
      viewBox="0 0 1200 552"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="515" height="515" />
      <rect x="557" y="0" rx="0" ry="0" width="245" height="52" />
      <rect x="557" y="62" rx="0" ry="0" width="643" height="336" />
      <rect x="557" y="418" rx="0" ry="0" width="161" height="54" />
      <rect x="557" y="492" rx="20" ry="20" width="137" height="60" />
      <rect x="716" y="492" rx="20" ry="20" width="192" height="60" />
    </ContentLoader>
  );
};

export const ReversedBoxesDeskLargeSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={1200}
      height={552}
      viewBox="0 0 1200 552"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="685" y="0" rx="20" ry="20" width="515" height="515" />
      <rect x="0" y="0" rx="0" ry="0" width="245" height="52" />
      <rect x="0" y="62" rx="0" ry="0" width="643" height="336" />
      <rect x="0" y="418" rx="0" ry="0" width="161" height="54" />
      <rect x="0" y="492" rx="20" ry="20" width="137" height="60" />
      <rect x="159" y="492" rx="20" ry="20" width="192" height="60" />
    </ContentLoader>
  );
};
