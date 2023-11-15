import React from 'react';
import ContentLoader from 'react-content-loader';

const BoxesTabSmallSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={619}
      height={741}
      viewBox="0 0 619 741"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="619" height="308" />
      <rect x="0" y="328" rx="0" ry="0" width="164" height="34" />
      <rect x="0" y="373" rx="0" ry="0" width="608" height="238" />
      <rect x="0" y="622" rx="0" ry="0" width="118" height="39" />
      <rect x="0" y="681" rx="20" ry="20" width="137" height="60" />
      <rect x="183" y="681" rx="20" ry="20" width="168" height="60" />
    </ContentLoader>
  );
};

export default BoxesTabSmallSkeleton;
