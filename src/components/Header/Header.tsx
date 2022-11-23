import {Button} from "../common/Button/Button";

export const Header = () => {
    return (
        <header className='header'>
            <h1>Book Seat</h1>
            <form>
                <input type="text"/>
                <Button text='Search'/>
            </form>
            <div>
                <Button text='Filter'/>
                <Button text='Sign In'/>
            </div>
        </header>
    )
}