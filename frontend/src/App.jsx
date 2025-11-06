import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AllAppoinments from './pages/Admin/AllAppoinments'
import AddDoctor from './pages/Admin/AddDoctor'
import Dashboard from './pages/Admin/Dashboard'
import DoctorsList from './pages/Admin/DoctorsList'
import AdminLayout from './layout/AdminLayout'

const App = () => {
  return (
    <Routes>
      <Route path = "/admin" element ={<AdminLayout/>}>
        <Route path='allAppoinments' element ={<AllAppoinments/>}/>
        <Route path = "addDoctor" element = {<AddDoctor/>}></Route>
        <Route path = "dashboard" element = {<Dashboard/>}></Route>
        <Route path = "DoctorsList" element = {<DoctorsList/>}></Route>
      </Route>
    </Routes>
  )
}

export default App