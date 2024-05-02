import {useRecoilValue} from "recoil";
import {appDataState} from "../States/appDataState";
import {Accordion} from "react-bootstrap";


const TasksList = () => {

    const appData = useRecoilValue(appDataState);

    return (
        <Accordion defaultActiveKey={['a0', 'a1', 'a2']} alwaysOpen>
            {
                appData.tasks.map((task, index) => (
                    <Accordion.Item eventKey={index.toString()} key={'task-' + index}
                                    className="mb-3 border border-3">
                        <Accordion.Header><h5>{task.title}</h5></Accordion.Header>
                        <Accordion.Body>
                            <p>{new Date(task.id).toISOString().slice(0, 19).replace('T', ', ')}</p>
                            <p>{task.body}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    );
}

export default TasksList;
