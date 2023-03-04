import React, { useState } from 'react'
import CustomInput from './CustomInput/CustomInput'
import SubmitButton from './SubmitButton/SubmitButton'
import RememberMeCheckbox from './RememberMeCheckbox/RememberMeCheckBox'

const SignInForm: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(true)
    
    //temporary callback
    const onFinish = () => console.log({password, rememberMe, username})
    
    return (
        <div>           
            <CustomInput 
                onChange={setUsername}
                placeholder='username'
                value={username}
            />
            <CustomInput 
                onChange={setPassword}
                placeholder='password'
                value={password}
                type='password'
            />
            <RememberMeCheckbox 
                checked = {rememberMe}
                onChange = {setRememberMe}
                textContent = 'Remember Me'
            />
            <SubmitButton 
                callback={onFinish}
                disabledParameters={[username, password]}
                textContent='Submit'
            />
        </div>
    )
}

export default SignInForm