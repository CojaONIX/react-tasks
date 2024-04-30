import { useState } from 'react';
import {useForm} from "react-hook-form";
import {Button, Collapse, Form} from "react-bootstrap";

const AddTaskForm = () => {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const formSubmitted = (data) => {

    };

    return (
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
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title <span className="text-danger">* {errors.title && <span>{errors.title.message}</span>}</span></Form.Label>
                                <Form.Control
                                    {...register("title", {
                                        required: 'Title field is required'
                                    })}
                                   type="text"
                                   autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="body">
                                <Form.Label>Body <span className="text-danger">* {errors.body && <span>{errors.body.message}</span>}</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    style={{ height: '210px' }}
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
    );
}

export default AddTaskForm;