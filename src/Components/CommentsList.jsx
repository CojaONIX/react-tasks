import {Button, CloseButton, Form, ListGroup} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {appDataState} from "../States/appDataState";


const CommentsList = () => {

    const setAppDataState = useSetRecoilState(appDataState);
    const appData = useRecoilValue(appDataState);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const formSubmitted = (data) => {

    };

    return (
        <>
        <ListGroup>
            <ListGroup.Item>
                <div className="d-flex justify-content-between align-items-start">
                    <p className="small">@Goran</p>
                    <p className="small">2024-05-04, 13:55:12</p>
                    <CloseButton className="small" />
                </div>
                {Date.now()}
            </ListGroup.Item>


        </ListGroup>

            <Form onSubmit={handleSubmit(formSubmitted)} className="mt-3 p-3">

                <Form.Group className="mb-3" controlId="body">
                    <Form.Label>@{appData.auth.name} Comment: <span className="text-danger">* {errors.body && errors.body.message}</span></Form.Label>
                    <Form.Control
                        as="textarea"
                        {...register("body", {
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