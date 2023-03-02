import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RememberMeCheckbox from './RememberMeCheckBox'

afterEach(cleanup)
const mockedCallback = jest.fn()

describe('Remember me checkbox', () => {
    const testText = 'test'
    const checked = true
    it('button renders', () => {
        render(<RememberMeCheckbox
                checked = {checked}
                onChange = {mockedCallback}
                textContent = {testText}
            />)
        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeInTheDocument()
    })
    it('checkbox renders with correct text content', () => {
        render(<RememberMeCheckbox
            checked = {checked}
            onChange = {mockedCallback}
            textContent = {testText}
        />)
        expect(screen.getByText(testText)).toBeInTheDocument()
    })
    it('checkbox renders with correct text checked value', () => {
        render(<RememberMeCheckbox
            checked = {checked}
            onChange = {mockedCallback}
            textContent = {testText}
        />)
        expect(screen.getByRole('checkbox')).toHaveAttribute('checked')
    })
    it('Pressing the checkbox calls callback', () => {
        render(<RememberMeCheckbox
            checked = {checked}
            onChange = {mockedCallback}
            textContent = {testText}
        />)        
        userEvent.click(screen.getByRole('checkbox'))
        userEvent.click(screen.getByRole('checkbox'))
        expect(mockedCallback).toHaveBeenCalledTimes(2)
    })
    
})
