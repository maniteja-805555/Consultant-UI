import React, {useEffect, useState} from 'react'
import { listConsultants, deleteConsultants } from '../../Services/ConsultantService'
import { useNavigate } from 'react-router-dom'


const ListConsultantComponent = () => {

    const [consultants, setConsultants] = useState([])

    const navigator = useNavigate();

    useEffect(()=>{
        getAllConsultants();
    },[])

    function getAllConsultants(){
        listConsultants().then((response)=>{
            setConsultants(response.data);
        }).catch(error=>console.error(error));
    }

    function addNewConsultant(){
        navigator('/add-consultant')
    }

    function homeApplication(){
        navigator('/')
    }

    function deleteConsultant(id){
        deleteConsultants(id).then((response)=>{getAllConsultants();
        }).catch(error  => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2 className="text-center">List of Consultants</h2>
        <button className='btn btn-primary mb-2' onClick={addNewConsultant}>Add Consultant</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Consultant Name</th>
                    <th>Consultant ID</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    consultants.map(consultant =>
                    <tr key={consultant.id}>
                        <td>{consultant.id}</td>
                        <td>{consultant.name}</td>
                        <td><button className='btn btn-danger' onClick={()=>deleteConsultant(consultant.id)}>Delete</button></td>
                    </tr>)
                }
            </tbody>
        </table>
        <button className='btn btn-primary mb-2' onClick={homeApplication}>Home</button>
    </div>
  )
}

export default ListConsultantComponent