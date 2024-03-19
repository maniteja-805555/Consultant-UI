import React, { useState } from 'react'
import { createConsultant } from '../../Services/ConsultantService';
import { useNavigate } from 'react-router-dom';

// git check

const ConsultantComponent = () => {

  const [name, setName] = useState('')

  const navigator = useNavigate()

  function back(){
      navigator('/consultants')
    }

  function saveConsultant(e) {
    e.preventDefault();

    const consultant = {name}
    console.log(consultant)

    createConsultant(consultant).then((response) => {
      console.log(response.data)
      navigator('/consultants')
    })
  }

  return (
    <div className='container'>
      <br></br>
      <br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add Consultant</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Name:</label>
                <input
                  type='text'
                  placeholder='Enter Consultant name'
                  name='name'
                  value={name}
                  className='form-control'
                  onChange={(e) => setName(e.target.value)}>
                </input>
              </div>
              <button className='btn btn-success' onClick={saveConsultant}>Submit</button>
            </form>
            <button className='btn btn-primary mb-2' onClick={back}>Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsultantComponent