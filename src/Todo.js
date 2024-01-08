import {useState} from "react";



const Todo = () => {
  
    const [list,setList]=useState([]);
    const [message,setMessage]=useState({text:" ",id:" "});
    const [editingItem,setEditingItem]=useState({id:" ",isEditing:false});
    
    const changeMessage =(e)=>{
        setMessage({...message,text:e.target.value})
    };

    const handleAdd=(e)=>{
        e.preventDefault();

        let newTodo={
            text:message.text,id:new Date().getTime().toString()
        };
        setList([
            ...list,newTodo
        ]);
        setMessage({
            text:"",id:""
        });
    };

    const changeEdit= (id)=>{
        setEditingItem({
            ...editingItem,
            id:id,
            isEditing:true,
        });
        let editableItems = list.find((eachItem)=>eachItem.id === id);
        setMessage({
            ...message,
            text:editableItems.text,
            id:editableItems.id,
        });
    };

    const handleEdit=(e)=>{
        e.preventDefault();
        console.log("previous todo's",list);
        let newTodos=list.map((eachItem)=>{
            
            if(eachItem.id === editingItem.id){
                return{
                    text:message.text,
                    id:editingItem.id
                };
            }
            else{
                return eachItem;
            }
        });
        setList(newTodos);
        setMessage({
            text:"",id:"",
        });
        setEditingItem({
            id:" ",isEditing:false,
        })
        console.log("current todo's",list);
    };

    const handleDelete=(id)=>{
        let newDelete = list.filter((eachItem)=>{
          return  eachItem.id !== id;
        });
        setList(newDelete);
    };
  
    return ( 
        <div className="container">
            <h1>THINKS TO DO</h1>
            <form>
            <input type="text" name="message" placeholder="Enter Some Text" value={message.text} onChange={changeMessage}/>
            {
                editingItem.isEditing?(
                    <button onClick={handleEdit}>Add Task</button>
                ):(
                    <button onClick={handleAdd}>Add Task</button>
                )           
            }
            </form>
            <hr />
            <ul>
            {
            list.map((eachItem)=>{
                const {text,id}=eachItem;
                return(
                    <li key={id}>
                        <span>{text}</span>
                        <button onClick={() =>changeEdit(id)}>Edit</button>
                        <button onClick={() =>handleDelete(id)}>Delete</button>
                    </li>
                )
            })}
            </ul>
        </div>
     );
}
 
export default Todo;