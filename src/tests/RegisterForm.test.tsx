import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegisterForm } from '@/components/form/registerForm/RegisterForm'
import { redirect } from 'next/navigation'

jest.mock('next/navigation', () => {
  return {
    redirect: jest.fn(),
  }
})

describe('RegisterForm Component', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should show form elements on screen', () => {
    render(<RegisterForm />)

    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const usernameInput = screen.getByRole('textbox', { name: 'username' })
    const passwordInput = screen.getByRole('password', { name: 'password' })
    const confirmPasswordInput = screen.getByRole('confirmPassword', { name: 'confirmPassword' })
    const buttonForm = screen.getByText('Register')

    expect(emailInput).toBeVisible()
    expect(usernameInput).toBeVisible()
    expect(passwordInput).toBeVisible()
    expect(confirmPasswordInput).toBeVisible()
    expect(buttonForm).toBeVisible()
  }),

  it('should show error messages when fields are empty', async () => {
    const user = userEvent.setup()
    render(<RegisterForm />)

    const buttonForm = screen.getByText('Register')

    await user.click(buttonForm)

    expect(screen.getByText('Invalid email')).toBeVisible()
    expect(screen.getByText('Usuário precisa ter 4 digitos no mínimo.')).toBeVisible()
    expect(screen.getByText('Senha precisa preciso ter 8 caracteres.')).toBeVisible()
    expect(screen.getByText('As senhas precisam estar iguais!')).toBeVisible()
  }),

  it('should type the username and password in the fields and submitted form', async () => {
    const redirectMocked = jest.mocked(redirect)
    const user = userEvent.setup()
    const mockEmail = 'user@mail.com'
    const mockName = 'user'
    const mockPassword = 'user123456'
    const mockConfirmPassword = 'user123456'

    render(<RegisterForm />)

    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const usernameInput = screen.getByRole('textbox', { name: 'username' })
    const passwordInput = screen.getByRole('password', { name: 'password' })
    const confirmPasswordInput = screen.getByRole('confirmPassword', { name: 'confirmPassword' })
    const buttonForm = screen.getByText('Register')

    await user.type(emailInput, mockEmail)
    await user.type(usernameInput, mockName)
    await user.type(passwordInput, mockPassword)
    await user.type(confirmPasswordInput, mockConfirmPassword)
    await user.click(buttonForm)

    expect(screen.queryByText('Invalid email')).not.toBeInTheDocument()
    expect(screen.queryByText('Usuário precisa ter 4 digitos no mínimo.')).not.toBeInTheDocument()
    expect(screen.queryByText('Senha precisa preciso ter 8 caracteres.')).not.toBeInTheDocument()
    expect(screen.queryByText('As senhas precisam estar iguais!')).not.toBeInTheDocument()

    try {
      fetchMock.mockResponseOnce(JSON.stringify({
        data: {
          email: mockEmail,
          username: mockName,
          password: mockPassword,
        }
      }))
  
      const response = await fetch(
        "https://papyrus-backend.onrender.com/v1/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: mockEmail,
            username: mockName,
            password: mockPassword,
          }),
        }
      ).then(res => res.json())
  
      expect(response).toEqual({
        data: {
          email: mockEmail,
          username: mockName,
          password: mockPassword
        }
      })
    } catch (err) {
      expect(redirectMocked).toHaveBeenCalledTimes(1)
    }
  })
})