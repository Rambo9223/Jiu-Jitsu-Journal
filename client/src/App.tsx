import { Route, Routes } from 'react-router';
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Logs from "./components/Logs";
import Media from "./components/Media";
import Settings from "./components/Settings";
import NavBar from './components/NavBar';
//import NewLog from './components/forms/NewLog';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import NewNote from './components/forms/NewNoteForm';
import NewMediaForm from './components/forms/NewMediaForm';
import NewLogForm from './components/forms/NewLogForm';
import { mediaDefaults, newLogDefaults, noteDefaults } from './components/utils/formDefaults';

type User = {
  sessionId:string,
  name:string
}

type Props = User


function App() {
  const [user,setUser] = useState<User |null >(null);
  //setUser({sessionId:"test",name:"Scott"})
  return (
    <div className="App" style={{/*Style will be dependant on users choice */
      "background": "linear-gradient(180deg, rgba(156, 164, 255, 1) 0%, rgba(237, 237, 255, 1) 35%, rgba(255, 255, 255, 1) 100%)"}}>
      {/* I think the logic here in the latter stages should be 
      two pages, the login page which load automatically unless a login object is 
      saved in local storage, 
      if object is present show the NavBar*/}
       {user!==null?<>
      <Routes>
       <Route path='/' element={<SignIn/>} />
       </Routes>
       </>
       :<>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='logs' element={<Logs/>}/>
      <Route path='media' element={<Media/>}/>
      <Route path='settings' element={<Settings/>}/>
      <Route path='new-log' element={<NewLogForm defaultValues={newLogDefaults} />}/>
      <Route path='new-note' element={<NewNote defaultValues={noteDefaults}/>}/>
      <Route path='new-media' element={<NewMediaForm defaultValues={mediaDefaults}/>}/>
      </Routes>
      <NavBar/>
       </>}

    </div>
  );
}

export default App;
