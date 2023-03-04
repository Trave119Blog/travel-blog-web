import React from 'react'
import { screen, render } from '@testing-library/react'
import CustomInput from './CustomInput'
import userEvent from '@testing-library/user-event'

const onChange = jest.fn()

describe('custom input in sign in form', () => {
    const testText = 'test'
    it('custom input renders', () => {
        render(<CustomInput 
            placeholder={testText}
            value=''
            onChange={onChange}
        />)
        expect(screen.getByPlaceholderText(testText)).toBeInTheDocument()
    })
    it('renders with password attribute', () => {
        render(<CustomInput 
            placeholder={testText}
            value=''
            type='password'
            onChange={onChange}
        />)
        expect(screen.getByPlaceholderText(testText)).toHaveAttribute('type', 'password')
    })
    it('renders with correct value', () => {
        render(<CustomInput 
            placeholder=''
            value={testText}
            onChange={onChange}
        />)
        expect(screen.getByDisplayValue(testText)).toBeInTheDocument()
    })
    it('onChange is working', () => {
        render(<CustomInput 
            placeholder={testText}
            value=''
            onChange={onChange}
        />)
        userEvent.type(screen.getByPlaceholderText(testText), testText)
        expect(onChange).toHaveBeenCalledTimes(testText.length)
    })
})