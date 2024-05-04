import {Button, Form} from "react-bootstrap";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {appDataState} from "../States/appDataState";
import {useForm} from "react-hook-form";


const AddCommentForm = ({taskIDX}) => {

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

        const modifiedComments = [...appData.tasks[taskIDX].comments, data];
        const modifiedTask = {...appData.tasks[taskIDX], comments: modifiedComments};
        const modifiedTasks = appData.tasks.map((task, index) => {
            return index === taskIDX ? modifiedTask : task;
        });

        setAppDataState({...appData, tasks: modifiedTasks});
        reset();
    };


    return (
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
    );
}

export default AddCommentForm;