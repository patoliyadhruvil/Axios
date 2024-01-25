import { Route, Routes } from 'react-router';
import './App.css'
import { CreateEmployee } from './components/CreateEmployee/CreateEmployee';
import Header from './components/Header/Header';
import ViewEmployee from './components/ViewEmployee/ViewEmployee';
import { EditEmployee } from './components/EditEmployee/EditEmployee';
import ViewPage from './components/ViewPage/ViewPage';
import Album from './components/Album/Album';
function App() {

  const data = [{ name: "Gautam Kachhadiya", email: "Kachhadiyagautam@54@gmail.com", contact: "87992 32320", age: "20" },
  { name: "Yash Rajput", email: "yrajput@87gmail.com", contact: "98776 45673", age: "21" },
  { name: "Harshal Nakrani", email: "harshalnakrani@54gmail.com", contact: "91823 45678", age: "22" }]

  return (
    <>
      <Header data={data} />
      <Album />
      {/* <Routes>
        <Route element={<CreateEmployee/>} path='/'/>
        <Route element={<ViewEmployee/>} path='/View'/>
        <Route element={<EditEmployee/>} path='/Edit'/>
        <Route element={<ViewPage />} path='/Viewpage'/>
      </Routes> */}
    </>
  )
}

export default App
