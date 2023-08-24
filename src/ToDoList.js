import './ToDoList.css'
function ToDoList(props){

    function deleteList(){
        props.deleteItem(props.id)
    }

    return(
        <>
     <div className="list-div">
        <div className="list">
            <p>{props.title}</p>
            <button className="btn1" onClick={deleteList}>
                Delete
            </button>
        </div>
    </div>
        
        </>
    )
    
}

export default ToDoList