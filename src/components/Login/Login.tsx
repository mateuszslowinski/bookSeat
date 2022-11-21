import {emailValidate, passwordValidate} from "../../constants/validate";
import {emailErrorDesc, passwordErrorDesc} from "../../constants/description";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {TextInputField} from "../common/TextInputField/TextInputField";
import {userLogin} from "../../features/user/userActions";
import {UserLoginType} from 'types';


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
                <TextInputField
                    type='email'
                    validation={register('email', {
                        required: "Email is required",
                        pattern: {
                            value: emailValidate,
                            message: emailErrorDesc,
                        },
                    })}
                    placeholder='Email' error={email}
                />
                <TextInputField
                    type='password'
                    validation={register('password', {
                        required: `Password is required`,
                        pattern: {
                            value: passwordValidate,
                            message: passwordErrorDesc
                        },
                    })} error={password}
                    placeholder="Password"
                />
                <button> Sign In</button>
            </form>
        </div>
    )
}