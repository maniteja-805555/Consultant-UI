import React from 'react'
import { useNavigate } from 'react-router-dom';

const MainPageComponent = () => {
    const navigator = useNavigate();

    function employeeApplication(){
        navigator('/applications')
    }

    function consultantApplication(){
        navigator('/consultants')
    }
  return (
    <div className='text-center'>
      <br />
        <button className='btn btn-primary mb-2' onClick={consultantApplication}>Consultnts</button>
        <br />
        <button className='btn btn-primary mb-2' onClick={employeeApplication}>Applications</button>
    </div>
  )
}

export default MainPageComponent