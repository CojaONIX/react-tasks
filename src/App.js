import "bootstrap/dist/css/bootstrap.min.css"

import LoginForm from "./Components/LoginForm";
import {RecoilRoot} from "recoil";
import AddTaskForm from "./Components/AddTaskForm";
import TasksList from "./Components/TasksList";

const App = () => {

    return (
        <RecoilRoot>
            <div className="container">
                <hr/>
                <div className="d-flex justify-content-between flex-wrap">
                    <h1>Tasks Manager</h1>
                    <LoginForm/>
                </div>
                <hr/>

                <AddTaskForm/>
                <hr/>

                <TasksList/>
                <hr/>
                <button onClick={() => localStorage.removeItem('react-tasks-app-data')} className="btn btn-outline-danger">Clear Local Storage</button>
            </div>
        </RecoilRoot>
    );
}

export default App;
