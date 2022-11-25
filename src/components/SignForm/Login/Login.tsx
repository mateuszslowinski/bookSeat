import {SignForm} from "../SignForm";
import {userLogin} from "../../../features/user/userActions";
import {RootState} from "../../../app/store";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {UserLoginType} from 'types';


export const Login = () => {
    const dispatch = useAppDispatch();
    const {errorMessage} = useAppSelector(
        (state: RootState) => state.user
    )
    const onSubmit = async (data: UserLoginType) => {
        const {email, password} = data
        if (email && password) {
            dispatch(userLogin({email, password}))
        }
    }
    return (
        <SignForm
            onSubmit={onSubmit}
            btnText='Sign In'
            formSubtitle='Sign In to Book Seat'
            login
            errorMessage={errorMessage}
        />
    )
}
