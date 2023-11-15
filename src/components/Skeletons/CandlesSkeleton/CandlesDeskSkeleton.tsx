import ContentLoader from 'react-content-loader';

const CandlesDeskSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={312}
      height={398}
      viewBox="0 0 312 398"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="25" y="481" rx="2" ry="2" width="140" height="10" />
      <rect x="12" y="245" rx="0" ry="0" width="232" height="32" />
      <rect x="0" y="0" rx="20" ry="20" width="312" height="328" />
      <rect x="0" y="364" rx="0" ry="0" width="100" height="16" />
      <rect x="0" y="344" rx="0" ry="0" width="190" height="16" />
    </ContentLoader>
  );
};

export default CandlesDeskSkeleton;
