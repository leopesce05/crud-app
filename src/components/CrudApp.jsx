import React,{useState} from 'react';
import CrudTable from './CrudTable';
import CrudForm from './CrudForm';

const initialDb = [
    {
      id: 1,
      name: "Seiya",
      constellation: "Pegaso",
    },
    {
      id: 2,
      name: "Shiryu",
      constellation: "Dragón",
    },
    {
      id: 3,
      name: "Hyoga",
      constellation: "Cisne",
    },
    {
      id: 4,
      name: "Shun",
      constellation: "Andrómeda",
    },
    {
      id: 5,
      name: "Ikki",
      constellation: "Fénix",
    },
  ];



function CrudApp() {

    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const deleteData = (id) => {
      let isDelete = window.confirm(
        `¿Estás seguro de eliminar el registro con el id '${id}'?`
      );
  
      if (isDelete) {
        let newData = db.filter((el) => el.id !== id);
        setDb(newData);
      } else {
        return;
      }
    };

    const createData = (data) => {
      data.id = Date.now();
      console.log(data);
      setDb([...db, data]);
    };

    const updateData = (data) => {
      let newData = db.map((el) => (el.id === data.id ? data : el));
      setDb(newData);
    };
    

    return ( 
        <>
        <CrudForm dataToEdit={dataToEdit} updateData={updateData} setDataToEdit={setDataToEdit} createData={createData}/>
        <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </>
    );
}

export default CrudApp;