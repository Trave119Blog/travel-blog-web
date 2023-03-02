import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'
import SignInForm from './SignInForm'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

describe('Sign In form', () => {
    const testText = 'test'
    it('form renders', () => {
        render(<SignInForm />)
        const userNameInput = screen.getByPlaceholderText(/Username/i)
        expect(userNameInput).toBeInTheDocument()
        const userPasswordInput = screen.getByPlaceholderText(/Password/i)
        expect(userPasswordInput).toBeInTheDocument()
    })
    it('an error highlighting appears when a user leaves the empty field', () => {
        render(<SignInForm />)
        const userNameInput = screen.getByPlaceholderText(/Username/i)
        userEvent.type(userNameInput, testText)
        userEvent.clear(userNameInput)
        expect(userNameInput).toHaveStyle('border-color: #ff4d4f')
    })
    it('an error highlighting disappears when a user starts typing', () => {
        render(<SignInForm />)
        const passwordInput = screen.getByPlaceholderText(/Password/i)
        userEvent.type(passwordInput, testText)
        userEvent.clear(passwordInput)
        userEvent.type(passwordInput, 'aaa')
        expect(passwordInput).not.toHaveStyle('border-color: #ff4d4f')
    })
    it('The submit button is disabled when at least one of the fields is empty', () => {
        render(<SignInForm />)
        const passwordInput = screen.getByPlaceholderText(/Password/i)
        userEvent.type(passwordInput, testText)
        expect(screen.getByRole('button')).toHaveAttribute('disabled')
        
        userEvent.clear(passwordInput)
        
        const userNameInput = screen.getByPlaceholderText(/Username/i)
        userEvent.type(userNameInput, testText)
        expect(screen.getByRole('button')).toHaveAttribute('disabled')
    })
    it('The submit button is able only when all the fields are not empty', () => {
        render(<SignInForm />)
        const passwordInput = screen.getByPlaceholderText(/Password/i)
        userEvent.type(passwordInput, testText)
        const userNameInput = screen.getByPlaceholderText(/Username/i)
        userEvent.type(userNameInput, testText)
        expect(screen.getByRole('button')).not.toHaveAttribute('disabled')        
    })
})
