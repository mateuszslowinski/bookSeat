import {TextInputField} from "../common/TextInputField/TextInputField";
import {emailValidate, passwordValidate} from "../../constants/validate";
import {emailErrorDesc, passwordErrorDesc} from "../../constants/description";
import {useForm} from "react-hook-form";
import {UserLoginType} from 'types';
import {NavLink} from "react-router-dom";

interface Props {
    onSubmit: any
    btnText: string
    formSubtitle: string
}

export const SignForm = ({onSubmit, btnText, formSubtitle}: Props) => {
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

    return (
        <div className='form_container'>
            <h2>{formSubtitle}</h2>
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
                <button>{btnText}</button>
            </form>
            <NavLink to='/register'>Don't have an account? Create one</NavLink>
        </div>
    )
}