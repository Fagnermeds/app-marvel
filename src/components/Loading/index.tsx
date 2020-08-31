import React from 'react';
import Loader from 'react-loader-spinner';

import { Container } from './styles';

const Loading = () => {
  return (
    <Container>
      <Loader
        type="ThreeDots"
        color="#ed1d24"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
    </Container>
  );
}

export default Loading;