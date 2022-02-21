import React from 'react';
import CrudTableRow from './CrudTableRow';


function CrudTable({data, deleteData,setDataToEdit}) {

    return ( 
        <table>
            <tr>
                <th>Nombre</th>
                <th>Constelacion</th>
                <th>Accion</th>
            </tr>
            {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </table>
     );
}

export default CrudTable;