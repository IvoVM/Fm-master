import Container from 'react-bootstrap/Container';
import {
  NavBar,
  Header,
  AboutUs,
  TeamCards,
  ContactMe,
  Schedule,Semanario
} from "../components";
const Main = () => {
  return (
    <Container fluid className='p-0'>
      <NavBar />
      <Header />
      <Semanario />
      <AboutUs />
      <TeamCards />
      <ContactMe />
      <Schedule />
    </Container>
  );
};

export default Main;
