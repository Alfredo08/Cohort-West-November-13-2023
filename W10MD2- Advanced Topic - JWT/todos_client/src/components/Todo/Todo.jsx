
const Todo = (props) => {
    return(
        <>
            <h2> Todo: {props.currentTodo.description} </h2>
            <h3> Status: {props.currentTodo.status} </h3>
        </>
    );
}

export default Todo;