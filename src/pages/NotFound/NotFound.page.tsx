import {NavLink} from "react-router-dom"
import {Button} from "../../components/common/Button/Button";

export const NotFoundPage = () => (
    <div className='error_container'>
        <h2>Error 404.</h2>
        <p>Page not found...</p>
        <p>Back to </p>
        <NavLink to="/">
            <Button text="Home page"/>
        </NavLink>
    </div>
)
