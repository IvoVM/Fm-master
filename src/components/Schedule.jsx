import Table from "react-bootstrap/Table";
import { scheduleDays, scheduleDays6to8 } from "../utils/utils.js";
function ResponsiveExample() {
  return (
    <section  id="schedule">
      <h3 className="text-center mt-5">Programación de la radio</h3>
      <div className="m-5">
        <Table responsive>
          <thead className="text-center">
            <tr>
              <th>#</th>
              {scheduleDays.map((item) => (
                <th key={item.id}>{item.day}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>6:00 a 8:00</td>
              {scheduleDays6to8.map((item) => (
                <td key={item.id}>{item.name}</td>
              ))}
            </tr>
            <tr>
              <td>8:00 a 10:00</td>
              {scheduleDays6to8.map((item) => (
                <td key={item.id}>{item.name}</td>
              ))}
            </tr>
            <tr>
              <td>10:00 a 12:00</td>
              {scheduleDays6to8.map((item) => (
                <td key={item.id}>{item.name}</td>
              ))}
            </tr>
            <tr>
              <td>12:00 a 14:00</td>
              {scheduleDays6to8.map((item) => (
                <td key={item.id}>{item.name}</td>
              ))}
            </tr>
            <tr>
              <td>14:00 a 16:00</td>
              {scheduleDays6to8.map((item) => (
                <td key={item.id}>{item.name}</td>
              ))}
            </tr>
            <tr>
              <td>16:00 a 18:00</td>
              {scheduleDays6to8.map((item) => (
                <td key={item.id}>{item.name}</td>
              ))}
            </tr>
            <tr>
              <td>18:00 a 20:00</td>
              {scheduleDays6to8.map((item) => (
                <td key={item.id}>{item.name}</td>
              ))}
            </tr>
            <tr>
              <td>20:00 a 22:00</td>
              {scheduleDays6to8.map((item) => (
                <td key={item.id}>{item.name}</td>
              ))}
            </tr>
            <tr>
              <td>22:00 a 24:00</td>
              {scheduleDays6to8.map((item) => (
                <td key={item.id}>{item.name}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export default ResponsiveExample;
