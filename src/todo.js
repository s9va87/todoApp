import './App.css';
import {useState} from "react";

const style = {
    'textDecoration': 'line-through'
}

function Todo(props) {
    const {todo = {}, isFirst, isLast} = props;
    const {done} = todo;

    const [inputValue, setInputValue] = useState(todo.title)
    const [isEditMode, setIsEditMode] = useState(false)

    const deleteButtonHandler = () => {
        props.deleteTodoItem(todo.id)
    }
    const isDone = done ? style : {}

    const saveButtonHandler = () => {
        props.editTodo(todo.id, inputValue)
        setInputValue(todo.title)
        setIsEditMode(false)
    }

    return (
        <div >
            <span style={isDone}>{todo.title}</span>
            <button onClick={deleteButtonHandler}>delete</button>
            <button onClick={() => props.updateTodo(todo.id)}>upd</button>
            <button disabled={isFirst} onClick={() => props.moveUp(props.index, props.index - 1)}>↑</button>
            <button disabled={isLast} onClick={() => props.moveUp(props.index, props.index + 1)}>↓</button>

            {!isEditMode && <button onClick={() => setIsEditMode(!isEditMode)}>edit</button>}

            {isEditMode &&
            <>
                <label >new title:</label>
                <input type="text"

                       onChange={(e) => setInputValue(e.target.value)}
                       value={inputValue}/>
                <button onClick={saveButtonHandler}>save</button>
                <button onClick={() => setIsEditMode(!isEditMode)}>cancel</button>
            </>}


        </div>
    );
}

export default Todo;