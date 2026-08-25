import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Helloworld from './Helloworld.jsx'
// import Greeting from './props.jsx'
// import Student from './student.jsx'
// import Course from './Coursecard.jsx'
// import Counter from './counter.jsx'
// import USE from './use.jsx'
// import Status from './Checkstatus.jsx'
// import List from './LIST.jsx'
// import Useffect from './UseEffect.jsx'
// import Evening from './Evening.jsx'
import List from './todolist.jsx'
import './style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Helloworld/> */}
    {/* <Greeting name= "brother"/>
    <Greeting name= "sister"/> */}
    {/* <Badge text="new" color="red"/>
    <Badge text="Sale"/> */}
    {/* <Student text="keerthana"/> */}
    {/* <Course name="html"/> <button>View course</button>
    <Course name="css"/>  <button>View course</button>
    <Course name="js"/>   <button>View course</button> */}
    {/* <Counter/> */}
    {/* <Status/> */}
    {/* <List/> */}
    {/* <Useffect/> */}
    {/* <Evening/> */}
    {/* <Counter/>
    <USE/> */}
    <List/>
  </StrictMode>,
)
