import {Button} from "../common/Button/Button"

export const Account = () => {
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
                    <Button text='Edit'/>
                </div>
            </div>
        </div>
    )
}