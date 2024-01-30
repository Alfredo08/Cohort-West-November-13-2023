import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "../Todo/Todo";

const Dashboard = () => {
    const [listOfTodos, setListOfTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodosOfCurrentUser = async () => {
            const URL = "http://localhost:8080/todosByUser";
            const settings = {
                method: 'GET',
                headers: {
                    'usertoken': localStorage.getItem('token')
                }
            }

            const response = await fetch(URL, settings)
            const responseJSON = await response.json();
            if(response.status === 406){
                navigate('/login')
            }
            else{
                setListOfTodos(responseJSON.todos);
            }
        }
        fetchTodosOfCurrentUser();
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <>
            <div className="row">
                <h1 className="text-primary col-10"> Dashboard </h1>
                <button className="col-2 btn btn-secondary" onClick={handleLogout}> Logout </button>
            </div>
            
            {listOfTodos.map((currentTodo, index) => {
                return(<Todo currentTodo={currentTodo} key={index} />)
            })}
        </>
    );
}

export default Dashboard;