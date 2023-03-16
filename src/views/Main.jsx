import Container from 'react-bootstrap/Container';
import {
  NavBar,
  Header,
  AboutUs,
  TeamCards,
  ContactMe,
  Schedule,Semanario,
  Footer
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
      <Footer />
    </Container>
  );
};

export default Main;
