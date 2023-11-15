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
      <rect x="25" y="481" rx="2" ry="2" width="140" height="10" />
      <rect x="0" y="0" rx="20" ry="20" width="154" height="183" />
      <rect x="0" y="327" rx="0" ry="0" width="181" height="16" />
      <rect x="0" y="351" rx="0" ry="0" width="90" height="16" />
      <rect x="0" y="192" rx="0" ry="0" width="101" height="16" />
      <rect x="0" y="215" rx="0" ry="0" width="80" height="16" />
    </ContentLoader>
  );
};

export default CandlesMobSkeleton;
