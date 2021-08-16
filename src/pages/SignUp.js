import React from 'react'
import Button from '../component/Button'
import'../component/SignUP.css'

function SignUp() {
    return (
        <div className='outterMost-div'>
            <form className='form-class'>
                    <input type="text" placeholder='Enter your first name' className='input-items'/><br />
                    <input type="text" placeholder='Enter your last name'className='input-items'/><br />
                    <input type="email" placeholder='Enter your Email' className='input-items'/><br />  
                    <input type="password" placeholder='Enter your passsword' className='input-items'/><br />  
                    <input type="password" placeholder='Retype password' className='input-items'/><br />
                    <Button buttonSize='' buttonStyle='btn-outline'>SIGN UP</Button>
            </form>
        </div>
    )
}

export default SignUp
