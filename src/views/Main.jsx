import Container from 'react-bootstrap/Container';
import { NavBar,Carrousel,Players } from "../components";
const Main = () => {
  return (
    <Container fluid className='p-0'>
      <NavBar  />
      <Carrousel />
      <Players />
    </Container>
      
  );
};

export default Main;
