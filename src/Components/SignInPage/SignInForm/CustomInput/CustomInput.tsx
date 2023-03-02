import { Input } from 'antd'
import React, { useState } from 'react'

type Props = {
    placeholder: string
    value: string
    onChange: (str: string) => void
    type?: string
}

const CustomInput: React.FC<Props> = (props) => {
    const [error, setError] = useState<'error' | ''>('')

    return (
        <Input 
                placeholder={props.placeholder}
                status={error}
                value={props.value}
                type={props.type}
                onChange={(e) => {
                    if(e.currentTarget.value) setError('')
                    else setError('error')
                    props.onChange(e.currentTarget.value)
                }}
                onBlurCapture={() => {
                    if(!props.value) setError('error')
                }}
            />
    )
}

export default CustomInput