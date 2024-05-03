import {useState} from 'react';
import {useForm} from "react-hook-form";
import {Button, Collapse, Form} from "react-bootstrap";
import {defaultCategories} from "../Data/Default";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {appDataState} from "../States/appDataState";

const AddTaskForm = () => {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();

    const setAppDataState = useSetRecoilState(appDataState);
    const appData = useRecoilValue(appDataState);

    const formSubmitted = (data) => {
        data.id = Date.now();
        data.finished = false;
        data.owner = appData.auth.name;
        setAppDataState({...appData, tasks: [...appData.tasks, data]});
        reset();
        setOpen(false);
    };


    return (
        appData.auth &&
        <>
            <div className="d-flex align-items-start">
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="add-task-form-collapse"
                    aria-expanded={open}
                    variant="outline-success"
                    className="me-5"
                >Add Task</Button>

                <div className="col-8">
                    <Collapse in={open}>
                        <div id="add-task-form-collapse">
                            <Form onSubmit={handleSubmit(formSubmitted)}>

                                <Form.Group className="mb-3" controlId="category">
                                    <Form.Label>Category <span
                                        className="text-danger">* {errors.category && errors.category.message}</span></Form.Label>
                                    <Form.Select
                                        aria-label="Category select" {...register("category", {required: 'Category select is required'})}>
                                        <option value="">Choose...</option>
                                        {defaultCategories.map(category => (
                                            <option key={category} value={category}>{category}</option>))}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="title">
                                    <Form.Label>Title <span
                                        className="text-danger">* {errors.title && errors.title.message}</span></Form.Label>
                                    <Form.Control
                                        {...register("title", {
                                            required: 'Title field is required'
                                        })}
                                        type="text"
                                        autoFocus
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="body">
                                    <Form.Label>Body <span className="text-danger">* {errors.body && errors.body.message}</span></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        style={{height: '210px'}}
                                        {...register("body", {
                                            required: 'Body field is required'
                                        })}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">Save</Button>
                            </Form>
                        </div>
                    </Collapse>
                </div>
            </div>
            <hr/>
        </>

    )
}

export default AddTaskForm;