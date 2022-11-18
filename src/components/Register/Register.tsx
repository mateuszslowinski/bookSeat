export const Register = () => {
    return (
        <div className='form_container'>
            <h2>Sign Up to Book Seat</h2>
            <label>
                <input  type="email" placeholder='Email'/>
            </label>
            <label>
                <input type="password" placeholder='Password'/>
            </label>
            <button>Sign up</button>
        </div>
    )
}