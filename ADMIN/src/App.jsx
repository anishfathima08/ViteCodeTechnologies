import React from 'react'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContextProvider from './Context/MyContextProvider'

import AdminSideBar from './Components/AdminSideBar'
import AdminNavBar from './Components/AdminNavBar'

import AddService from './Pages/AddService'
import AddCourse from './Pages/AddCourse'
import ServiceList from './Pages/ServiceList'
import CourseList from './Pages/CourseList'
import ContactEnquiryList from './Pages/ContactEnquiryList'

const App = () => {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <MyContextProvider>
          <div className="flex h-screen">
            <AdminSideBar />
            <div className="flex-1 h-screen overflow-y-scroll">
              <AdminNavBar />
              <div className="p-5">
                <Routes>
                  <Route path='/' element={<AddCourse />} />
                </Routes>
                <Routes>
                  <Route path='/addservice' element={<AddService />} />
                </Routes>
                <Routes>
                  <Route path='/servicelist' element={<ServiceList />} />
                </Routes>
                <Routes>
                  <Route path='/contactenquirylist' element={<ContactEnquiryList />} />
                </Routes>
                <Routes>
                  <Route path='/courselist' element={<CourseList />} />
                </Routes>
              </div>
            </div>
          </div>
        </MyContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App