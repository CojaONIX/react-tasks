import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import {useForm} from "react-hook-form";

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
                        <form onSubmit={handleSubmit(formSubmitted)}>
                            <div className="mb-3">
                                <label htmlFor="title">Title <span className="text-danger">*</span></label>
                                <input
                                    {...register("title", {
                                        required: 'Title field is required'
                                    })}
                                   type="text"
                                   id="title"
                                   className="form-control mt-2"
                                   autoFocus
                                />
                                <p className="text-danger mt-2">{errors.title && <span>{errors.title.message}</span>}</p>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="body">Body <span className="text-danger">*</span></label>
                                <textarea
                                    {...register("body", {
                                        required: 'Body field is required'
                                    })}
                                    id="body"
                                    className="form-control mt-2"
                                />
                                <p className="text-danger mt-2">{errors.body && <span>{errors.body.message}</span>}</p>
                            </div>

                            <button className="btn btn-primary form-control my-2">Save</button>
                        </form>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}

export default AddTaskForm;