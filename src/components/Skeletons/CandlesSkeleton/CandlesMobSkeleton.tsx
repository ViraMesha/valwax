import React from 'react';
import ContentLoader from 'react-content-loader';

const CandlesMobSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={154}
      height={249}
      viewBox="0 0 154 249"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="154" height="183" />
      <rect x="0" y="192" rx="2" ry="2" width="101" height="16" />
      <rect x="0" y="215" rx="2" ry="2" width="80" height="16" />
    </ContentLoader>
  );
};

export default CandlesMobSkeleton;
