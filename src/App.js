import "bootstrap/dist/css/bootstrap.min.css"
import {Accordion} from "react-bootstrap";

import {defaultData} from "./Data/Default";
import LoginForm from "./Components/LoginForm";

const App = () => {

    return (
        <div className="container">
            <hr/>
            <h1>Tasks Manager</h1>
            <hr/>
            <Accordion defaultActiveKey="login">
                <Accordion.Item eventKey="login">
                    <Accordion.Header><h4>Login</h4></Accordion.Header>
                    <Accordion.Body>
                        <LoginForm/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <hr/>
            <hr/>
            <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
                {
                    defaultData.tasks.map((task, index) => {
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
    );
}

export default App;
