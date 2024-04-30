import "bootstrap/dist/css/bootstrap.min.css"
import {Accordion} from "react-bootstrap";

import {defaultTasks} from "./Data/Default";
import LoginForm from "./Components/LoginForm";
import {RecoilRoot} from "recoil";
import AddTaskForm from "./Components/AddTaskForm";

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
                <Accordion defaultActiveKey={['a0', 'a1', 'a2']} alwaysOpen>
                    {
                        defaultTasks.map((task, index) => {
                                return (
                                    <Accordion.Item eventKey={index.toString()} key={'task-' + index}
                                                    className="mb-3 border border-3">
                                        <Accordion.Header><h5>{task.title}</h5></Accordion.Header>
                                        <Accordion.Body>
                                            <p>{new Date(task.id).toISOString().slice(0, 19).replace('T', ', ')}</p>
                                            <p>{task.body}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            }
                        )
                    }
                </Accordion>

                <hr/>
            </div>
        </RecoilRoot>
    );
}

export default App;
