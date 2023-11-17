import React from 'react';
import ContentLoader from 'react-content-loader';

const CandlesTabLargeSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={224}
      height={318}
      viewBox="0 0 224 318"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="224" height="248" />
      <rect x="0" y="264" rx="2" ry="2" width="181" height="16" />
      <rect x="0" y="292" rx="2" ry="2" width="90" height="16" />
    </ContentLoader>
  );
};

export default CandlesTabLargeSkeleton;
