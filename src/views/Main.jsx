import Container from 'react-bootstrap/Container';
import { NavBar,Carrousel,Players,AboutUs } from "../components";
const Main = () => {
  return (
    <Container fluid className='p-0'>
      <NavBar  />
      <Carrousel />
      <Players />
      <AboutUs />
    </Container>
      
  );
};

export default Main;
