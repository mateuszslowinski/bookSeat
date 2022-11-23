import {useDispatch} from "react-redux";
import {SignForm} from "../SignForm";
import {userLogin} from "../../../features/user/userActions";
import {UserLoginType} from 'types';


export const Login = () => {
    const dispatch = useDispatch();
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
        />
    )
}