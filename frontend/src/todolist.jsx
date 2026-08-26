import { useState , useEffect } from "react";  
function List(){            
    const[type,settype]=useState("");
    const[tasks,settasks]=useState([]);     
    const[editIndex,setEditIndex]=useState(null);
    function HandleClick() {
        if (editIndex ===null) {
        fetch("http://localhost:8000/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: type,
            is_done: false
        })
    });
    settype("");
    } else {
        fetch(`http://localhost:8000/todos/${tasks[editIndex].id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: type,
        is_done: tasks[editIndex].is_done
    })
});
        
        settype("");
        setEditIndex(null);
    }
    }

function handleDelete(taskToDelete) {
    fetch(`http://localhost:8000/todos/${taskToDelete.id}`, {
        method: "DELETE"
    });

    settasks(tasks.filter((task) => task.id !== taskToDelete.id));
}
// after the component appears on the screen perform this task 
useEffect(() => {     
    fetch("http://127.0.0.1:8000/todos")
        .then(response => response.json())
        .then(data => {
            settasks(data);
        });
}, []);


return(
    <div className="todo">
    <h1>TO DO LIST </h1>
        <input type="text"
        value={type}
        onChange={(e) =>settype(e.target.value)}/>


     {tasks.map((task,index) => (
    <div key={index}>
        <h3>{task.title}</h3>


        <button onClick={()=>handleDelete(task)}>
            Delete
            </button>


            <button onClick={()=> {
            setEditIndex(index);
            settype(task.title);
        }}>
            Edit
        </button>
    </div>
))}

        <button onClick={HandleClick}>
        {editIndex===null? "Add Task": "Update Task"}        
        </button>
        
    </div>
);
}
export default List;


