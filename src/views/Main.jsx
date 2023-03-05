import Container from 'react-bootstrap/Container';
import { NavBar,Carrousel,Players,AboutUs,TeamCards,ContactMe } from "../components";
const Main = () => {
  return (
    <Container fluid className='p-0'>
      <NavBar  />
      <Carrousel />
      <Players />
      <AboutUs />
      <TeamCards />
      <ContactMe />
    </Container>
      
  );
};

export default Main;
