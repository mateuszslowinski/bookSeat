import {Button} from "../common/Button/Button";
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
    return (
        <header className='header'>
            <h1>Book Seat</h1>
            <form>
                <input type="text"/>
                <Button text='Search'/>
            </form>
            <div>
                <Button text='Filter'/>
                <Button text='Sign In' onClick={() => navigate("/login")}/>
            </div>
        </header>
    )
}