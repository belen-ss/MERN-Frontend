import React, { useEffect } from "react";
import { request } from "../helpers/helpers";
import { Container, Row, Col } from "react-bootstrap";

import DataGrid from '../grid/grid';
import "./Employees.scss";


const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "nombre",
    text: "Name",
  },
  {
    dataField: "apellidop",
    text: "Apellido Paterno",
  },
  {
    dataField: "apellidom",
    text: "Apellido Materno",
  },
  {
    dataField: "direccion",
    text: "Dirección",
  },
  {
    dataField: "mail",
    text: "E-mail",
  },
  {
    dataField: "telefono",
    text: "Teléfono",
  },
];

const SearchEmployees = () => {

  return (
    <Container id="empleados-buscar-container">
      <Row>
        <h1> Buscar empleado</h1>
      </Row>
      <Row>
        <DataGrid
          url='/empleados'
          columns={columns}
        />
      </Row>
    </Container>
  );
};

export default SearchEmployees;

// export default class SearchEmployees extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   //Se ejecuta cuando el componente ya se montó

//   componentDidMount() {
//     request
//       .get("/empleados")
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((err) => console.error(err));
//   }
//   render() {
//     return (
//       <Container id="empleados-buscar-container">
//         <Row>
//           <h1> Buscar empleado</h1>
//         </Row>
//       </Container>
//     );
//   }
// }
