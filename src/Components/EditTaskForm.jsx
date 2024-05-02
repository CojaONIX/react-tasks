
import {useForm} from "react-hook-form";
import {Button, Form} from "react-bootstrap";
import {defaultCategories} from "../Data/Default";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {appDataState} from "../States/appDataState";

const EditTaskForm = ({task, setEditTaskID}) => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const setAppDataState = useSetRecoilState(appDataState);
    const appData = useRecoilValue(appDataState);

    const formSubmitted = (data) => {
        data.id = parseInt(data.id);
        data.finished = data.finished === 'true';
        const newTasksState = appData.tasks.map(task => {
            return task.id === data.id ? data : task;
        });
        setAppDataState({...appData, tasks: newTasksState});
        setEditTaskID('');

    };

    return (
        <Form onSubmit={handleSubmit(formSubmitted)}>

            <Form.Group className="mb-3" controlId="category">
                <Form.Label>Category <span
                    className="text-danger">* {errors.category && errors.category.message}</span></Form.Label>
                <Form.Select
                    defaultValue={task.category}
                    aria-label="Category select" {...register("category", {required: 'Category select is required'})}>
                    {
                        defaultCategories.map(category => (<option key={category} value={category}>{category}</option>))
                    }

                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title <span
                    className="text-danger">* {errors.title && errors.title.message}</span></Form.Label>
                <Form.Control
                    defaultValue={task.title}
                    {...register("title", {
                        required: 'Title field is required'
                    })}
                    type="text"
                    autoFocus
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="body">
                <Form.Label>Body <span
                    className="text-danger">* {errors.body && errors.body.message}</span></Form.Label>
                <Form.Control
                    as="textarea"
                    style={{height: '210px'}}
                    defaultValue={task.body}
                    {...register("body", {
                        required: 'Body field is required'
                    })}
                />
            </Form.Group>
            <input type="hidden" {...register('id')} defaultValue={task.id}/>
            <input type="hidden" {...register('owner')} defaultValue={task.owner}/>
            <input type="hidden" {...register('finished')} defaultValue={task.finished}/>

            <div className="d-flex justify-content-between">
                <Button onClick={() => setEditTaskID('')} variant="secondary" type="button">Cancel</Button>
                <Button variant="primary" type="submit">Save</Button>
            </div>
        </Form>

    )
}

export default EditTaskForm;