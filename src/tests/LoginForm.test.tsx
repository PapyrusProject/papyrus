import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from '@/components/form/loginForm/LoginForm'
import { signIn } from "next-auth/react";

jest.mock('next-auth/react', () => {
  return {
    signIn: jest.fn()
  }
})

describe('LoginForm Component', () => {
  it('should show form elements on screen', () => {
    render(<LoginForm />)

    const usernameInput = screen.getByRole('textbox', { name: 'username' })
    const passwordInput = screen.getByRole('password', { name: 'password' })
    const buttonForm = screen.getByText('Entrar')

    expect(usernameInput).toBeVisible()
    expect(passwordInput).toBeVisible()
    expect(buttonForm).toBeVisible()
  }),

  it('should show error messages when fields are empty', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    const buttonForm = screen.getByText('Entrar')

    await user.click(buttonForm)

    expect(screen.getByText('Usuário precisa ter 4 digitos no mínimo.')).toBeVisible()
    expect(screen.getByText('Senha precisa preciso ter 8 caracteres.')).toBeVisible()
  }),

  it('should type the username and password in the fields and submitted form', async () => {
    const user = userEvent.setup()
    const signInMocked = jest.mocked(signIn)
    const mockName = 'user'
    const mockPassword = 'user123456'

    render(<LoginForm />)

    const usernameInput = screen.getByRole('textbox', { name: 'username' })
    const passwordInput = screen.getByRole('password', { name: 'password' })
    const buttonForm = screen.getByText('Entrar')

    await user.type(usernameInput, mockName)
    await user.type(passwordInput, mockPassword)
    await user.click(buttonForm)

    expect(screen.queryByText('Usuário precisa ter 4 digitos no mínimo.')).not.toBeInTheDocument()
    expect(screen.queryByText('Senha precisa preciso ter 8 caracteres.')).not.toBeInTheDocument()

    expect(signInMocked).toHaveBeenCalled()
    expect(signInMocked).toHaveBeenCalledWith('credentials', {
      username: mockName,
      password: mockPassword,
      callbackUrl: "/"
    })
  })
})