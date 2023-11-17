import ContentLoader from 'react-content-loader';

const CandlesTabSmallSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={380}
      viewBox="0 0 300 380"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="300" height="314" />
      <rect x="0" y="327" rx="2" ry="2" width="181" height="16" />
      <rect x="0" y="351" rx="2" ry="2" width="90" height="16" />
    </ContentLoader>
  );
};

export default CandlesTabSmallSkeleton;
