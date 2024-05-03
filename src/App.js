import "bootstrap/dist/css/bootstrap.min.css"

import LoginForm from "./Components/LoginForm";
import AddTaskForm from "./Components/AddTaskForm";
import TasksList from "./Components/TasksList";
import {RecoilRoot} from "recoil";

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
                <TasksList/>
            </div>
        </RecoilRoot>
    );
}

export default App;
