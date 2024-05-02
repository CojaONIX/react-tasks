import {useRecoilValue, useSetRecoilState} from "recoil";
import {appDataState} from "../States/appDataState";
import {Accordion, Button, Form} from "react-bootstrap";


const TasksList = () => {

    const setAppDataState = useSetRecoilState(appDataState);
    const appData = useRecoilValue(appDataState);

    const setFinishedTask = (taskID) => {
        const newTasksState = appData.tasks.map(task => {
            return task.id === taskID ? {...task, finished: !task.finished} : task;
        });
        setAppDataState({...appData, tasks: newTasksState});
    };

    const deleteTask = (taskID) => {
        setAppDataState({...appData, tasks: appData.tasks.filter(task => task.id !== taskID)});
    }

    return (
        <Accordion defaultActiveKey={['a0', 'a1', 'a2']} alwaysOpen>
            {
                appData.tasks.map((task, index) => (
                    <Accordion.Item eventKey={index.toString()} key={'task-' + index}
                                    className="mb-3 border border-3">
                        <Accordion.Header><h5 className={task.finished ? 'text-success' : 'text-danger'}>{task.title}</h5></Accordion.Header>
                        <Accordion.Body>
                            <p>{new Date(task.id + 2*60*60*1000).toISOString().slice(0, 19).replace('T', ', ')}</p>
                            <p>{task.body}</p>
                            <div className="d-flex justify-content-between">
                                <Button onClick={() => deleteTask(task.id)} variant="outline-danger">Delete Task</Button>
                                <Form.Check
                                    checked={task.finished}
                                    onChange={() => setFinishedTask(task.id)}
                                    type="switch"
                                    id={'switch'+task.id}
                                    label="Finished"
                                />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    );
}

export default TasksList;
