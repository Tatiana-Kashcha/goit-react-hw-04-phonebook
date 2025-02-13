import { Vortex } from 'react-loader-spinner';
import * as s from './Loader.styled';

const Loader = () => {
  return (
    <s.LoaderStyle>
      <Vortex
        visible={true}
        height="200"
        width="200"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={[
          '#7ac4f5',
          '#886fb6',
          '#4aeee6',
          '#e689ee',
          '#f55e07',
          '#f7b844',
        ]}
      />
    </s.LoaderStyle>
  );
};

export default Loader;

// для 2-х кольорового спінера
// colors={[
//   '#4aeee6',
//   '#f55e07',
//   '#4aeee6',
//   '#f55e07',
//   '#f55e07',
//   '#4aeee6',
// ]}
