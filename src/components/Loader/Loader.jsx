import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      heigth="200"
      width="200"
      color="white"
      strokeWidth={1}
      strokeWidthSecondary={1}
      secondaryColor="black"
      ariaLabel="loading"
    />
  );
};
export default Loader;
