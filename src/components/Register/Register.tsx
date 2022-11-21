import {useForm} from "react-hook-form";
import {emailValidate, passwordValidate} from "../../constants/validate";
import {emailErrorDesc, passwordErrorDesc} from "../../constants/description";
import {api} from "../../utils/api";
import {UserLoginType} from 'types'

export const Register = () => {
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

    const onSubmit = async ({email, password}: UserLoginType) => {
        try {
            const res = await api.post(`/register`, ({email, password}), {
                headers: {
                    "Content-Type": "application/json"
                },
            },);
            console.log(res)
            if (res.status === 201) {
                console.log('success')
            }
        } catch (error: any) {
            console.log(error)
        }
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