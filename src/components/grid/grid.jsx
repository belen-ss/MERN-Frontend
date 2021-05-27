import React, { useState, useEffect } from "react";
import { request } from "../helpers/helpers";

import { Row, Col } from "react-bootstrap";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const DataGrid = ({ url, columns }) => {
  const [Rows, setRows] = useState([]);
  const options = {
    custom: true,
    totalSize: Rows.length,
  };

  useEffect(() => {
    request
      .get(url)
      .then((response) => {
        setRows(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(Rows);
  return (
    /* Aquí va el buscador */
    <ToolkitProvider keyField="tp" data={Rows} columns={columns} search>
      {(props) => (
        <>
          <hr />
          {/* Aquí se hace la paginación */}
          <PaginationProvider pagination={paginationFactory(options)}>
            {({ paginationProps, paginationTableProps }) => (
              <>
                <Row>
                  <Col>
                    {/* Número de elementos a mostrar */}
                    <SizePerPageDropdownStandalone {...paginationProps} />
                  </Col>
                  <Col>
                    {/* Esta es la barra de buscuador */}
                    <SearchBar {...props.searchProps} />
                  </Col>
                </Row>

                {/* Aquí está la tabla */}
                <BootstrapTable
                  keyField="bt"
                  data={Rows}
                  columns={columns}
                  {...paginationTableProps}
                  {...props.baseProps}
                />
                {/* Aquí están los números */}
                <PaginationListStandalone {...paginationProps} />
              </>
            )}
          </PaginationProvider>
        </>
      )}
    </ToolkitProvider>
  );
};

export default DataGrid;
// export default class DataGrid extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rows: []
//     };
//   }
//   render() {
//     const options = {
//       custom: true,
//       totalSize: this.state.rows.length,
//     };
//     return (
//       /* Aquí va el buscador */
//       <ToolkitProvider keyField="tp" data={rows} columns={columns} search>
//         {(props) => (
//           <>
//             <hr />
//             {/* Aquí se hace la paginación */}
//             <PaginationProvider pagination={paginationFactory(options)}>
//               {({ paginationProps, paginationTableProps }) => (
//                 <>
//                   <Row>
//                     <Col>
//                       {/* Número de elementos a mostrar */}
//                       <SizePerPageDropdownStandalone {...paginationProps} />
//                     </Col>
//                     <Col>
//                       {/* Esta es la barra de buscuador */}
//                       <SearchBar {...props.searchProps} />
//                     </Col>
//                   </Row>

//                   {/* Aquí está la tabla */}
//                   <BootstrapTable
//                     keyField="bt"
//                     data={rows}
//                     columns={columns}
//                     {...paginationTableProps}
//                     {...props.baseProps}
//                   />
//                   {/* Aquí están los números */}
//                   <PaginationListStandalone {...paginationProps} />
//                 </>
//               )}
//             </PaginationProvider>
//           </>
//         )}
//       </ToolkitProvider>
//     );
//   }
// }
