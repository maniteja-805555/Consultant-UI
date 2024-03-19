import './App.css';
import ConsultantComponent from './Components/Consultants/ConsultantComponent';
import FooterComponent from './Components/Styling/FooterComponent';
import HeaderComponent from './Components/Styling/HeaderComponent';
import ListConsultantComponent from './Components/Consultants/ListConsultantComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListApplicationComponent from './Components/Applications/ListApplicationComponent';
import ApplicationComponent from './Components/Applications/ApplicationComponent';
import MainPageComponent from './Components/MainPageComponent';

function App() {
  return (
    <>  
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
          <Route path='/' element = {<MainPageComponent/>}></Route>
          <Route path='/consultants' element = {<ListConsultantComponent/>}></Route>
          <Route path='/add-consultant' element = {<ConsultantComponent/>}></Route>
          <Route path='/applications' element = {<ListApplicationComponent/>}></Route>
          <Route path='/add-application' element ={<ApplicationComponent/>}></Route>
          </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </>
  );
}

export default App;
