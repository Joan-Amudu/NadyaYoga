import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/HomePage.jsx'
import Classes from './pages/Classes.jsx'
import Contact from './pages/Contact.jsx'
import Users from './Users'
import CreateUser from  './CreateUser'
import UpdateUser from './UpdateUser'


function App() {
   return (
    <div>
      <BrowserRouter>  
        <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Classes' element={<Classes />} />
        <Route path='/Contact' element={<Contact />} />       
          <Route path='/users' element={<Users />}></Route>          
          <Route path='/create' element={<CreateUser />}></Route>
          <Route path='/update/:id' element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div> 
  )
}
export default App

