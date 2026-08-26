// // COMPONENTS 

// function Welcome () {
//     return <h1>My wishes</h1>
// }
//   function App() {
//     return (
//       <div>
//             <Welcome/>
//             <Welcome/>
//       </div>
//     );
//   }
// export default App;

// JSX java script xml 
// function Hello() {
//   let name="RAJ"
//   return (
//     <div>
//       <h1>Hello  {name}</h1>
//       <h1>Good Morning  {name}</h1>
//     </div>
//   );
// }

// function App() {
//     return (
//         <Hello />
//     );
// }

// export default App;


// JSX accessing concept 

// function Keerthana() {
//    let name ="keerthana"
//   return (
//     <div>
//    <h1>Learning</h1>
//    <h2>hard work done by {name}</h2>
//    </div>
//  );
// }
// function App() {
//   return (
//     <div>
//        <Keerthana/>
//     </div>
    
//   );
// }
// export default App;


// PROPERTIES 
// function CourseCard (props) {
// return (
//   <div>
//     <h2>{props.name}</h2>
//     <p>{props.description}</p>
//   </div>
// )
// }

// function App() {
//   return (
//     <div>
//       <CourseCard
//       name="HTML"
//       description="learn html basics"
//     />
//     <CourseCard
//     name="CSS"
//     description="learn css basics"
//     />
//     <CourseCard
//     name="sql"
//     description="learn sql basics"
//     />
//     </div>
//   );
// }
// export default App;

// USE STATE 
// import { useState } from "react";

// function Counter() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={() => setCount(count + 1)}>
//                 Increase
//             </button>
//         </div>
//     );
// }

// function App() {
//     return <Counter />;
// }

// export default App;

// EVENTS  onclick
// import useState from "react";
// function App() {
//     function handleclick () {
//         console.log("button clicked")
//     }
//     return (
//         <button onClick={handleclick}>
//         click me 
//         </button>
//     )
// }
// export default App;
// ONCHANGE 
// function App() {

//     function handleChange() {
//         console.log("User typed something");
//     }

//     return (
//         <input onChange={handleChange} />
//     );
// }

// export default App;

// ONSUBMIT
// import { useState } from "react";

// function App() {
//     const [message, setMessage] = useState("");

//     function handleSubmit(event) {
//         event.preventDefault();
//         setMessage("Form submitted");
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" />
//                 <button type="submit">Submit</button>
//             </form>

//             <h2>{message}</h2>
//         </div>
//     );
// }

// export default App;

// ONMOUSE 
// function App() {
//     function HandleMouseEnter() {
//         console.log("mouse moved")
//     }
//     return (
//         <button onmousemove={HandleMouseEnter}>
//         Mouse  move here 
//         </button>
//     )
// }
// export default App;

// CONDITIONAL RENDERING 
// function App() {
//     let logged_in =false;
//     return (
//         <div>
//         {logged_in ? <h1>WELCOME</h1> : <h1>Please Login</h1>}
//     </div>
//     )
// }
// export default App;

// ANOTHER EXAMPLE 
// function App() {
// let age =20;
// return(
//     <div>
//         {age ===15? <h1>you are eligible</h1> : <h1>you are under age</h1>}
        
//     </div>
// );
// }
// export default App;

// LISTS
// const course1="html"   instead of writing like this we can use list to add all courses
// const course2="css"
// use of list 
// const courses=["html","css","java","sql"]    

// Now for each course if u want to add a button like view course we use .map() 
// function App() {
//     const Courses = ["html", "css", "java", "sql"];

//     return (
//         <div>
//             {Courses.map(Course => (
//                 <div>
//                     <h3>{Course}</h3>
//                     <button>View Course</button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default App;

// list .map() + key   
// key wont remove duplicates it just give unique id to each item present in the list
// function App() {
//     const Courses=["html","css","js","sql","html"]
//     return (
//         <div>
//             {Courses.map((course,index)=> (
//         <div key={index}>
//         <h2>{course}</h2>
//         <button>view course</button>
//         </div>
//     ))}
//     </div>
//     );
// }
// export default App;

// FORMS 
// function App() {
//     function handlesubmit() {
//         alert("registration successfull")
//     }
//     return(
//         <form onSubmit={handlesubmit}>
//             <label>Name:</label>
//         <input type="text"/>
//         <br/>

//          <label>Email:</label>
//         <input type="email"/>
//         <br/>
        
//         <label>PhNO:</label>
//         <input type="number"/>
//         <br/>

//         <button type="submit">
//             Submit
//         </button>
//         </form>
//     );
// }
// export default App;

// USEFFECT 
// import { useEffect } from "react";
// function App() {
//     useEffect(()=> {
//         alert("Thank you for inviting");
//     }, []);
//     return(
//         <h2>LEARNX</h2>
//     )
// }
// export default App;

// TASK 1 ABOUT INPUT AND BUTTON 

// function App() {
//     function Handlesubmit() {
//         alert("registration successful");
//     }

//     return (
//         <form onSubmit={Handlesubmit}>
//             <label>Name:</label>
//             <input type="text" />

//             <label>Email:</label>
//             <input type="email" />

//             <label>Number:</label>
//             <input type="number" />

//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// export default App;

// stores what user types 
// import { useState } from "react";

// function App() {
//     const [text, settext] = useState("");
//     const [tasks, setTasks] = useState([]);

//     function HandleChange() {
//         setTasks([...tasks, text]);
//         settext("");
//     }

//     return (
//         <div>
//             <h2>MY TO-DO-LIST</h2>

//             <input
//                 type="text"
//                 value={text}
//                 onChange={(e) => settext(e.target.value)}
//             />

//             <button onClick={HandleChange}>
//                 Add Task
//             </button>

//             {tasks.map((task) => (
//                 <p key={task}>{task}</p>
//             ))}
//         </div>
//     );
// }

// export default App;

// function helloworld() {
//     return(
//         <div>
//             <h2>helloworld</h2>
//         </div>
//     )
// }
// export default helloworld;
