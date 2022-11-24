import {Button} from "../common/Button/Button"
import {useNavigate} from "react-router-dom";

export const Account = () => {
    const navigate = useNavigate();
    return (
        <div className='page_container'>
            <div className='account_container'>
                <div>
                    <h2>Your account: name</h2>
                    <p>Joined by: Date</p>
                </div>
                <div>
                    <p>name</p>
                    <p>surname</p>
                    <p>email</p>
                </div>
                <div>
                    <p>Favorite places</p>
                    <Button text='Edit' onClick={() => navigate('edit')}/>
                </div>
            </div>
        </div>
    )
}