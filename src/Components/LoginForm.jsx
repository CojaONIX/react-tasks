import {useForm} from "react-hook-form";
import {EmailValidator} from "../Validators/EmailValidator";
import {PasswordValidator} from "../Validators/PasswordValidator";
import {useState} from "react";
import {defaultUsers} from "../Data/Default";


const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const [loginMessage, setLoginMessage] = useState(null);

    const formSubmitted = (data) => {

        if (1 === 2) {
            setLoginMessage('Wrong credentials!');
        }
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
                                <input {...register("email", EmailValidator)}
                                       type="text"
                                       id="email"
                                       className="form-control mt-2"
                                       autoFocus
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password">Password <span className="text-danger">*</span></label>
                                <input {...register("password", PasswordValidator)}
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
                    <h6>{errors.username && <span>{errors.username.message}</span>}</h6>
                    <h6>{errors.password && <span>{errors.password.message}</span>}</h6>
                    <h6>{loginMessage}</h6>
                </div>
            </div>
        </div>
    )
};

export default LoginForm;
