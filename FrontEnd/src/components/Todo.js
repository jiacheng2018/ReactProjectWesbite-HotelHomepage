import React,{useState} from 'react'
function Todos({index,todo}){
 return(
     <div className="todo">
         {todo.text}
     </div>
 )
}
function TodoFrom({addTodo}){
    const [value,setValue]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!value)return;
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} onChange={e=>setValue(e.target.value)}/>
        </form>
    )
}
function Todo(){
    const [todos,setTodos]=useState([
        {
            text:"Leanr about react",
            isCompleted:false
        },
        {
            text:"Leanr about Javascript",
            isCompleted:true
        },
        {
            text:"Leanr about Css",
            isCompleted:false
        }
    ]);
    return(
        <div className="app">
             <div className="todo-list">
                 {todos.map((todos,index)=>(
                    <Todos key={index} index={index} todo={todos} />
                 ))}
             </div>
        </div>
    )
}
export default Todo