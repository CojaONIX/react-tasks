import {useRecoilValue, useSetRecoilState} from "recoil";
import {appDataState} from "../States/appDataState";
import {Accordion, Button, Form} from "react-bootstrap";
import {useState} from "react";
import EditTaskForm from "./EditTaskForm";
import CommentsList from "./CommentsList";


const TasksList = () => {

    const setAppDataState = useSetRecoilState(appDataState);
    const appData = useRecoilValue(appDataState);

    const [editTaskID, setEditTaskID] = useState("");

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
                    <Accordion.Item eventKey={index.toString()} key={'task-' + index} className="mb-3 border border-3">
                        <Accordion.Header>
                            <h5 className={task.finished ? 'text-success' : 'text-danger'}>({task.owner} / {task.category}): {task.title}</h5>
                        </Accordion.Header>
                        {editTaskID === task.id
                            ?
                            <Accordion.Body>
                                <EditTaskForm task={task} setEditTaskID={setEditTaskID}/>
                            </Accordion.Body>
                            :
                            <Accordion.Body>
                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <p className="small p-0 m-0">{new Date(task.id + 2 * 60 * 60 * 1000).toISOString().slice(0, 10)}</p>
                                        <p className="small p-0 m-0">{new Date(task.id + 2 * 60 * 60 * 1000).toISOString().slice(11, 19)}</p>
                                    </div>

                                    <Form.Check
                                        checked={task.finished}
                                        onChange={() => setFinishedTask(task.id)}
                                        type="switch"
                                        id={'switch' + task.id}
                                        label="Finished"
                                    />
                                </div>

                                <p>{task.body}</p>
                                {appData.auth &&
                                    <>
                                        <div className="d-flex justify-content-between">
                                            <Button onClick={() => deleteTask(task.id)} variant="outline-danger btn-sm">Delete
                                                Task</Button>
                                            {task.owner !== 'App' &&
                                                <Button onClick={() => setEditTaskID(task.id)}
                                                        variant="outline-primary btn-sm">Edit Task</Button>
                                            }
                                        </div>
                                        <hr/>
                                        <CommentsList comments={task.comments}/>
                                    </>
                                }
                            </Accordion.Body>
                        }
                    </Accordion.Item>
                ))
            }
        </Accordion>
    )

}

export default TasksList;
