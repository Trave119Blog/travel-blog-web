import { Button } from 'antd'
import React from 'react'

type Props = {
    callback: () => void
    disabledParameters: string[]
    textContent: string
}

const SubmitButton: React.FC<Props> = ({callback, disabledParameters, textContent}) => {
    let buttonDisabled = disabledParameters.some(elem => !elem)
    return (
        <Button
            disabled={buttonDisabled}
            type='primary'
            onClick={callback}
        >
            {textContent}
        </Button>
    )
}

export default SubmitButton
