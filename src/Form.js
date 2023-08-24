import { useState } from 'react'
import './Form.css'

function Form(props){

    const [text, setText] = useState({
        title: "",
    })

    function inputTextHandler(e){
        const value = e.target.value
        const name = e.target.name

        setText((prevdata)=>{
            return {
                ...prevdata, 
                [name] : value,
            }
        })
    }

    function addEvent(){
        props.passList(text)
        setText({
            title: ""
        })
    }

    return(
        <>
        <div className="form">
           <div className="form_div">
                <input type="text" name='title' className="todo_input" placeholder="Add a item" onChange={inputTextHandler} />
                <button className="btn" type="submit" onClick={addEvent}>+</button>
                <div className="select">
                    <select name="todos" className="filter_list">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </div>
                </div>
        </div>
        
        </>
    )
    
}

export default Form