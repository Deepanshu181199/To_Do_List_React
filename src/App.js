import { useState } from "react"
import Header from './Header.js'
import Form from './Form.js'
import ToDoList from "./ToDoList.js"

function App(){

    const [addItem, setAddItem] = useState([])

    function addList(text){
        setAddItem((oldData)=>{
            return [...oldData, text]
        })
       
    }

    function onDelete(id){
        setAddItem((oldData1)=>
            oldData1.filter((currData, indx)=>{
                return indx !== id
            })
        )

    }

    return(
        <>
        <Header/>
        <Form passList={addList}/>
        {  
      addItem.map((val, index)=>{
            return <ToDoList
            key={index}
            id={index}
            title={val.title}        
            
            deleteItem = {onDelete}
            
            />
        })
        }
        
        </>
    )
    
}
export default App