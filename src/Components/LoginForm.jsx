import {useForm} from "react-hook-form";

import {defaultUsers} from "../Data/Default";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {appDataState} from "../States/appDataState";
import {Accordion, Button, Card, Form} from "react-bootstrap";

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const setAppDataState = useSetRecoilState(appDataState);
    const appData = useRecoilValue(appDataState);

    const formSubmitted = (data) => {
        const auth = defaultUsers.filter(e => e.email === data.email);
        const {password, ...rest} = auth[0];
        rest.isLogged = true;
        setAppDataState({...appData, auth: rest});
    };

    const handleLogout = () => {
        const {auth, ...rest } = appData;
        setAppDataState(rest);
    };

    return (
        <Accordion>
            <Accordion.Item eventKey="login" className="border border-primary border-2">
                <Accordion.Header>
                    <h4 className="me-4">{appData.auth ? 'Hello, ' + appData.auth.name : 'Please Login to manage tasks'}</h4>
                </Accordion.Header>
                <Accordion.Body>
                {appData.auth
                    ?
                    <Button onClick={() => handleLogout()} variant="primary col-12">Logout</Button>
                    :
                    <Card>
                        <Card.Header>
                            <Card.Title>Test Default Users:</Card.Title>
                            <hr/>
                            {
                                defaultUsers.map((user) => {
                                    return (
                                        <Card.Text key={'user-' + user.id} className="p-0 m-0">{user.email}</Card.Text>
                                    )
                                })
                            }
                            <hr/>
                            <Card.Title>pass: password</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Form onSubmit={handleSubmit(formSubmitted)}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text"
                                        {...register("email", {
                                            required: 'Email field is required',
                                            validate: {
                                                existsCheck: (value) => defaultUsers.filter(e => e.email === value).length !== 0 || 'Email must be Test Default User.'
                                            }
                                        })}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text"
                                        {...register("password", {
                                            required: 'Password field is required',
                                            validate: {
                                                passwordCheck: value => value === 'password' || 'Password must be "password"',
                                            }
                                        })}
                                    />
                                </Form.Group>


                                <Button variant="primary" type="submit">Login</Button>
                            </Form>
                        </Card.Body>

                        <Card.Footer className="text-danger">
                            <h6>{errors.email && <span>{errors.email.message}</span>}</h6>
                            <h6>{errors.password && <span>{errors.password.message}</span>}</h6>
                        </Card.Footer>
                    </Card>
                }

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default LoginForm;
