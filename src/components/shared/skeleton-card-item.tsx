import ContentLoader from 'react-content-loader';

const SkeletonCardItem = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={515}
    viewBox="0 0 280 515"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="280" height="405" />
    <rect x="0" y="474" rx="0" ry="0" width="50" height="24" />
    <rect x="-1" y="432" rx="0" ry="0" width="280" height="27" />
  </ContentLoader>
);

export default SkeletonCardItem;
