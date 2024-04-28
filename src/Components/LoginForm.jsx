import {useForm} from "react-hook-form";

import {defaultUsers} from "../Data/Default";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {appDataState} from "../States/appDataState";
import {Accordion} from "react-bootstrap";


const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const setAppDataState = useSetRecoilState(appDataState);
    const appData = useRecoilValue(appDataState);

    const formSubmitted = (data) => {
        const auth = defaultUsers.users.filter(e => e.email === data.email);
        setAppDataState({auth: auth[0]});
    }

    return (
        <Accordion defaultActiveKey="login">
            <Accordion.Item eventKey="login" className="border border-primary border-2">
                <Accordion.Header>
                    <h4 className="me-4">{appData.auth ? 'Hello, ' + appData.auth.name : 'Please Login to manage tasks'}</h4>
                </Accordion.Header>
                <Accordion.Body>
            {appData.auth
                ?
                <button className="btn btn-primary form-control my-2">Logout</button>
                :
                <div className="mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="p-0 m-0">Test Default Users:</h5>
                            <hr/>
                            {
                                defaultUsers.users.map((user) => {
                                    return (
                                        <p className="p-0 m-0">{user.email}</p>
                                    )
                                })
                            }
                            <hr/>
                            <h5 className="p-0 m-0">pass: password</h5>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit(formSubmitted)}>
                                <div className="mb-3">
                                    <label htmlFor="email">Email <span className="text-danger">*</span></label>
                                    <input {...register("email", {
                                        required: 'Email field is required',
                                        validate: {
                                            existsCheck: (value) => defaultUsers.users.filter(e => e.email === value).length !== 0 || 'Email must be Test Default User.'
                                        }
                                    })}
                                           type="text"
                                           id="email"
                                           className="form-control mt-2"
                                           autoFocus
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password">Password <span className="text-danger">*</span></label>
                                    <input {...register("password", {
                                        required: 'Password field is required',
                                        validate: {
                                            passwordCheck: value => value === 'password' || 'Password must be "password"',
                                        }
                                    })}
                                           type="text"
                                           id="password"
                                           className="form-control mt-2"
                                    />
                                </div>

                                <button className="btn btn-primary form-control my-2">Login</button>
                            </form>
                        </div>

                        <div className="card-footer text-danger">
                            <h6>{errors.email && <span>{errors.email.message}</span>}</h6>
                            <h6>{errors.password && <span>{errors.password.message}</span>}</h6>
                        </div>
                    </div>
                </div>
            }

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default LoginForm;
