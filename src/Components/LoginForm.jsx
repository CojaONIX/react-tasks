import {useForm} from "react-hook-form";

import {defaultUsers} from "../Data/Default";
import {appDataState} from "../States/appDataState";
import {useSetRecoilState} from "recoil";


const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const setAppDataState = useSetRecoilState(appDataState);

    const formSubmitted = (data) => {
        console.log(data);
        setAppDataState(data);
    }

    return (
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
                    {2 === 2
                        ?
                        <form onSubmit={handleSubmit(formSubmitted)}>
                            <div className="mb-3">
                                <label htmlFor="email">Email <span className="text-danger">*</span></label>
                                <input {...register("email", {
                                            required: 'Email field is required',
                                            validate: {
                                                existsCheck: (value) => {
                                                    if (defaultUsers.users.filter(e => e.email === value).length === 0) {
                                                        return 'Email must be Test Default User.';
                                                    }
                                                }
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
                                                passwordCheck: value => (value === 'password') || 'Password must be "password"',
                                            }
                                        })}
                                       type="text"
                                       id="password"
                                       className="form-control mt-2"
                                />
                            </div>

                            <button className="btn btn-primary form-control my-2">Login</button>
                        </form>
                        : <button className="btn btn-primary form-control my-2">Logout</button>
                    }
                </div>

                <div className="card-footer text-danger">
                    <h6>{errors.email && <span>{errors.email.message}</span>}</h6>
                    <h6>{errors.password && <span>{errors.password.message}</span>}</h6>
                </div>
            </div>
        </div>
    )
};

export default LoginForm;
