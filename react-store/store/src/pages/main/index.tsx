import Catalogo from 'components/catalogo';
import Header from '../../components/header/index';
import VideoStyle from '../../components/videoslider';

function Main() {
  return (
    <>
      <Header/>
      <VideoStyle/>
      <Catalogo></Catalogo>
    </>
  );
}

export default Main;