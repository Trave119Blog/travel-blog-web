import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SubmitButton from './SubmitButton'

afterEach(cleanup)
const mockedCallback = jest.fn()

describe('Submit button', () => {
    const testText = 'test'
    const disabledParameters = ['aaa', 'bbb']
    it('button renders', () => {
        render(<SubmitButton
                callback={mockedCallback}
                disabledParameters={disabledParameters}
                textContent = {testText}
            />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
    it('button renders with correct text content', () => {
        render(<SubmitButton
            callback={mockedCallback}
            disabledParameters={disabledParameters}
            textContent = {testText}
        />)
        expect(screen.getByText(testText)).toBeInTheDocument()
    })
    it('The submit button is disabled when at least one of the disabled paramters is empty', () => {
        render(<SubmitButton
            callback={mockedCallback}
            disabledParameters={['aaa', '', 'bbb']}
            textContent = {testText}
        />)
        expect(screen.getByRole('button')).toHaveAttribute('disabled')
    })
    it('The submit button is able only when all the fields are not empty', () => {
        render(<SubmitButton
            callback={mockedCallback}
            disabledParameters={disabledParameters}
            textContent = {testText}
        />)
        expect(screen.getByRole('button')).not.toHaveAttribute('disabled')        
    })
    it('Pressing the submit button calls callback', () => {
        render(<SubmitButton
            callback={mockedCallback}
            disabledParameters={disabledParameters}
            textContent = {testText}
        />)        
        userEvent.click(screen.getByRole('button'))
        expect(mockedCallback).toHaveBeenCalledTimes(1)
    })    
})
