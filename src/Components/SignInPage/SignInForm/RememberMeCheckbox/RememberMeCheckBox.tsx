import { Checkbox } from 'antd'
import React from 'react'

type Props = {
    checked: boolean
    onChange: (event: boolean) => void
    textContent: string 
}

const RememberMeCheckbox: React.FC<Props> = ({checked, onChange, textContent}) => {
    return (
        <Checkbox
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        >
            {textContent}
        </Checkbox>
    )
}

export default RememberMeCheckbox