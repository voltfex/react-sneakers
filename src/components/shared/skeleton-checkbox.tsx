import ContentLoader from 'react-content-loader';

const SkeletonCheckbox = () => (
  <ContentLoader
    speed={2}
    width={122}
    height={15}
    viewBox="0 0 122 15"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="1" y="0" rx="4" ry="4" width="15" height="15" />
    <rect x="28" y="0" rx="4" ry="4" width="100" height="15" />
  </ContentLoader>
);

export default SkeletonCheckbox;
