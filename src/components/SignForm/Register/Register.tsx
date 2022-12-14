import {useState} from "react";
import {api} from "../../../utils/api";
import {SignForm} from "../SignForm";
import {UserLoginType} from 'types'

export const Register = () => {
    const [errorMessage, setErrorMessage] = useState<string>('');

    const onSubmit = async ({email, password}: UserLoginType) => {
        try {
            const res = await api.post(`/register`, ({email, password}), {
                headers: {
                    "Content-Type": "application/json"
                },
            },);
            if (res.status === 201) {
                console.log('success')
            }
        } catch (error) {
            setErrorMessage((error as Error).message)
        }
    }
    return (
        <SignForm
            onSubmit={onSubmit}
            btnText='Sign up'
            formSubtitle='Sign Up to Book Seat'
            errorMessage={errorMessage}
        />
    )
}