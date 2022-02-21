import React from 'react';

function CrudTableRow({el, deleteData,setDataToEdit}) {
    return ( 
        <tr>
            <td>{el.name}</td>
            <td>{el.constellation}</td>
            <td>
                <button onClick={()=>{setDataToEdit(el)}}>editar</button>
                <button onClick={() => deleteData(el.id)}>eliminar</button>
            </td>
        </tr>
     );
}

export default CrudTableRow;