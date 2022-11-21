import {emailValidate, passwordValidate} from "../../constants/validate";
import {emailErrorDesc, passwordErrorDesc} from "../../constants/description";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {UserLoginType} from 'types';
import {userLogin} from "../../features/user/userActions";


export const Login = () => {
    const {
        handleSubmit,
        register,
        formState: {
            errors: {email, password},
        },
    } = useForm<UserLoginType>({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const dispatch = useDispatch();

    const onSubmit = async (data: UserLoginType) => {
        const {email, password} = data
        if (email && password) {
            dispatch(userLogin({email, password}))
        }
    }


    return (
        <div className='form_container'>
            <h2>Sign In to Book Seat</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input type="email"
                           {...register('email', {
                               required: "Email is required",
                               pattern: {
                                   value: emailValidate,
                                   message: emailErrorDesc,
                               },
                           })}
                           placeholder='Email'
                    />
                    {email ? <div>{email.message}</div> : null}
                </label>
                <label>
                    <input
                        type="password"
                        {...register('password', {
                            required: `Password is required`,
                            pattern: {
                                value: passwordValidate,
                                message: passwordErrorDesc
                            },
                        })}
                        placeholder='Password'
                    />
                    {password ? <div>{password.message}</div> : null}
                </label>
                <button>Sign In</button>
            </form>
        </div>
    )
}