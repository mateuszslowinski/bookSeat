import {useForm} from "react-hook-form";
import {emailValidate, passwordValidate} from "../../constants/validate";
import {emailErrorDesc, passwordErrorDesc} from "../../constants/description";

type RegisterFormType = {
    email: string
    password: string
}
export const Register = () => {
    const {
        handleSubmit,
        register,
        formState: {
            errors: {email, password},
        },
    } = useForm<RegisterFormType>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = ({email, password}: RegisterFormType) => {
        console.log(email, password, 'sign up')
    }
    return (
        <div className='form_container'>
            <h2>Sign Up to Book Seat</h2>
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
                <button>Sign up</button>
            </form>
        </div>
    )
}