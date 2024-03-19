import React, {useEffect, useState} from 'react'
import { listApplications,deleteApplications } from '../../Services/ConsultantService';
import { useNavigate } from 'react-router-dom';

const ListApplicationComponent = () => {
    const [applications, setApplications] = useState([])

    const navigator = useNavigate();

    useEffect(()=>{
        getAllApplications();
    },[])

    function getAllApplications(){
        listApplications().then((response)=>{
            setApplications(response.data);
        }).catch(error=>console.error(error));
    }

    function addNewApplication(){
        navigator('/add-application')
    }

    function deleteApplication(id){
        deleteApplications(id).then((response) => {
            getAllApplications();
        }).catch(error  => {
            console.error(error);
        })
    }

    function homeApplication(){
        navigator('/')
    }

  return (
    <div className='container'>
        <h2 className="text-center">List of Applications</h2>
        <button className='btn btn-primary mb-2' onClick={addNewApplication}>Add Application</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Application Id</th>
                    <th>Consultant </th>
                    <th>Application Number</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    applications.map(application => 
                        <tr key={application.id}>
                            <td>{application.id}</td>
                            <td>{application.con_id.name}</td>
                            <td>{application.app_no}</td>
                            <td>{application.created_date}</td>
                            <td><button className='btn btn-danger' onClick={()=>deleteApplication(application.id)}>Delete</button></td>
                        </tr>)
                }
            </tbody>
        </table>
        <button className='btn btn-primary mb-2' onClick={homeApplication}>Home</button>
    </div>
  )
}

export default ListApplicationComponent