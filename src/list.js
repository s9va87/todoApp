import './App.css';

import Todo from "./todo";


function List(props){
    // const list = props.list
    const {list=[]} = props;

    return (
        <div >
            {list.map((el, index)=>
                <Todo todo={el}
                      key={el.id}
                      deleteTodoItem={props.deleteTodo}
                      updateTodo={props.updateTodo}
                      moveUp={props.moveUp}
                      index={index}
                      isFirst={index === 0}
                      isLast={index === list.length - 1}
                      changeTitle={props.changeTitle}
                      inputChangeOne={props.inputChangeOne}
                      editTodo={props.editTodo}
                />
            )}
        </div>
);
}
export  default  List;