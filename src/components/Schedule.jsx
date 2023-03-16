import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function ScheduleAcordion() {
    return (
        <section id='schedule' className='d-flex justify-content-center align-items-center flex-column mt-4'>
            <h2>Programación</h2>
            <Accordion className='schedule m-4'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Lunes</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>6:00hs a 8:00hs: La Matera</ListGroup.Item>
                            <ListGroup.Item>8:00hs a 10:30hs:  resumen 24</ListGroup.Item>
                            <ListGroup.Item>10:30hs a 12:30hs: La Mañana del Gorrión</ListGroup.Item>
                            <ListGroup.Item>12:30hs a 14:00hs: Evocando tangos</ListGroup.Item>
                            <ListGroup.Item>14:00hs a 16:00hs: Saltando sin parar</ListGroup.Item>
                            <ListGroup.Item>16:00hs a 18:00hs: Mastermanía</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Martes</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>6:00hs a 8:00hs: La Matera</ListGroup.Item>
                            <ListGroup.Item>8:00hs a 10:30hs:  resumen 24</ListGroup.Item>
                            <ListGroup.Item>10:30hs a 12:30hs: La Mañana del Gorrión</ListGroup.Item>
                            <ListGroup.Item>12:30hs a 14:00hs: Evocando tangos</ListGroup.Item>
                            <ListGroup.Item>14:00hs a 16:00hs: Saltando sin parar</ListGroup.Item>
                            <ListGroup.Item>16:00hs a 18:00hs: Mastermanía</ListGroup.Item>
                            <ListGroup.Item>18:00hs a 20:00hs: Abriendo caminos</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Miercoles</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>6:00hs a 8:00hs: La Matera</ListGroup.Item>
                            <ListGroup.Item>8:00hs a 10:30hs:  resumen 24</ListGroup.Item>
                            <ListGroup.Item>10:30hs a 12:30hs: La Mañana del Gorrión</ListGroup.Item>
                            <ListGroup.Item>12:30hs a 14:00hs: Evocando tangos</ListGroup.Item>
                            <ListGroup.Item>14:00hs a 16:00hs: Saltando sin parar</ListGroup.Item>
                            <ListGroup.Item>16:00hs a 18:00hs: Mastermanía</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Jueves</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>6:00hs a 8:00hs: La Matera</ListGroup.Item>
                            <ListGroup.Item>8:00hs a 10:30hs:  resumen 24</ListGroup.Item>
                            <ListGroup.Item>10:30hs a 12:30hs: La Mañana del Gorrión</ListGroup.Item>
                            <ListGroup.Item>12:30hs a 14:00hs: Evocando tangos</ListGroup.Item>
                            <ListGroup.Item>14:00hs a 16:00hs: Saltando sin parar</ListGroup.Item>
                            <ListGroup.Item>16:00hs a 18:00hs: Mastermanía</ListGroup.Item>
                            <ListGroup.Item>20:00hs a 22:00hs: De todo un poco</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Viernes</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>6:00hs a 8:00hs: La Matera</ListGroup.Item>
                            <ListGroup.Item>8:00hs a 10:30hs:  resumen 24</ListGroup.Item>
                            <ListGroup.Item>10:30hs a 12:30hs: La Mañana del Gorrión</ListGroup.Item>
                            <ListGroup.Item>12:30hs a 14:00hs: Evocando tangos</ListGroup.Item>
                            <ListGroup.Item>14:00hs a 16:00hs: Saltando sin parar</ListGroup.Item>
                            <ListGroup.Item>16:00hs a 18:00hs: Mastermanía</ListGroup.Item>
                            <ListGroup.Item>20:00hs a 22:00hs: De todo un poco</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Sábado</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>7:00hs a 9:00hs: Recorriendo el litoral</ListGroup.Item>
                            <ListGroup.Item>9:00hs a 12:00: Arriba Miramar</ListGroup.Item>
                            <ListGroup.Item>12:00hs a 16:00hs: Evocando tangos y batidos musicales</ListGroup.Item>
                            <ListGroup.Item>16:00hs a 18:00: A Cami tenes</ListGroup.Item>
                            <ListGroup.Item>18:00hs a 20:00: Que lo sepa la calle</ListGroup.Item>
                            <ListGroup.Item>20:00hs a 22:00: De todo un poco</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Domingo</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item>9:00hs a 17:00hs: Batidos musicales y evocando tangos</ListGroup.Item>
                            <ListGroup.Item>17:00hs a 19:00hs: Con esencia romántica</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    );
}

export default ScheduleAcordion;