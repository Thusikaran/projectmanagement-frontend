import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import IssueDetails from './pages/IssueDetails/IssueDetails'
import Subscription from './pages/Subscription/Subscription'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project/:id' element={<ProjectDetails/>} />
        <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails/>} />
        <Route path='/upgrade_plan' element={<Subscription/>} />
     </Routes>
    </>
  )
}

export default App
