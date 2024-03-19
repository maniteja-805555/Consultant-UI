import React, { useState } from 'react'
import { createApplications } from '../../Services/ConsultantService';
import { useNavigate } from 'react-router-dom';

const ApplicationComponent = () => {
  const [name, setName] = useState('')

  const [appNo, setAppNo] = useState('')

  const navigator = useNavigate()

  function back(){
    navigator('/applications')
  }

  function saveApplication(e) {
    e.preventDefault();

    const application = {name,appNo}
    console.log(application)

    createApplications(application).then((response) => {
      console.log(response.data)
      navigator('/applications')
    }).catch(error  => {
      console.error(error);
  })
  }
  return (
    <div className='container'>
      <br></br>
      <br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add Application</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Name:</label>
                <input
                  type='text'
                  placeholder='Enter Application name'
                  name='name'
                  value={name}
                  className='form-control'
                  onChange={(e) => setName(e.target.value)}>
                </input>
                <br />
                <label className='form-label'>Application Number:</label>
                <input
                  type='number'
                  placeholder='Enter Application number'
                  appNo='appNo'
                  value={appNo}
                  className='form-control'
                  onChange={(e) => setAppNo(e.target.value)}>
                </input>
              </div>
              <button className='btn btn-success' onClick={saveApplication}>Submit</button>
              <br />
              <button className='btn btn-primary mb-2' onClick={back}>Back</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationComponent