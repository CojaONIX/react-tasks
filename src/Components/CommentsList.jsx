import {Button, CloseButton, Form, ListGroup} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {appDataState} from "../States/appDataState";


const CommentsList = ({taskID, comments}) => {

    const setAppDataState = useSetRecoilState(appDataState);
    const appData = useRecoilValue(appDataState);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const formSubmitted = (data) => {
        data.id = Date.now();
        data.author = appData.auth.name;

        const modifiedComments = [...appData.tasks[taskID].comments, data];
        const modifiedTask = {...appData.tasks[taskID], comments: modifiedComments};
        const modifiedTasks = appData.tasks.map((task, index) => {
            return index === taskID ? modifiedTask : task;
        })

        setAppDataState({...appData, tasks: modifiedTasks});
        reset();
    };

    return (
        <>
            <ListGroup>
                {
                    comments.map(comment =>
                        <ListGroup.Item  key={comment.id}>
                            <div className="d-flex justify-content-between align-items-start text-success">
                                <p className="small">@{comment.author}</p>
                                <p className="small">{new Date(comment.id + 2*60*60*1000).toISOString().slice(0, 19).replace('T', ', ')}</p>
                                <CloseButton className="small" />
                            </div>
                            {comment.text}
                        </ListGroup.Item>
                    )
                }
            </ListGroup>

            <Form onSubmit={handleSubmit(formSubmitted)} className="mt-3 p-3">
                <Form.Group className="mb-3" controlId="text">
                    <Form.Label>@{appData.auth.name} Comment: <span className="text-danger">* {errors.text && errors.text.message}</span></Form.Label>
                    <Form.Control
                        as="textarea"
                        {...register("text", {
                            required: 'Comment field is required'
                        })}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">Save</Button>
            </Form>
        </>
    )
}

export default CommentsList;