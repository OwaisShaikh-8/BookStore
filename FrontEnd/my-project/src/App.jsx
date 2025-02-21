import React from 'react'
import Home from './Home/Home';
import { Routes ,Route} from 'react-router-dom'
import Contact from './components/Contact';
import About from './components/About';
import Course from './Course/Course';
import Signup from './components/Signup';
function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Course/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App;
