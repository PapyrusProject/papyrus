import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '@/components/form/contactForm/contactForm'

describe('LoginForm Component', () => {
  it('should show form elements on screen', () => {
    render(<ContactForm />)

    const usernameInput = screen.getByRole('textbox', { name: 'username' })
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const textAreaInput = screen.getByRole('textbox', { name: 'message' })
    const buttonForm = screen.getByText('Send your message')

    expect(usernameInput).toBeVisible()
    expect(emailInput).toBeVisible()
    expect(textAreaInput).toBeVisible()
    expect(buttonForm).toBeVisible()
  }),

  it('should show error messages when fields are empty', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const buttonForm = screen.getByText('Send your message')

    await user.click(buttonForm)

    expect(screen.getByText('Usuário precisa ter 4 digitos no mínimo.')).toBeVisible()
    expect(screen.getByText('Digite um email valido')).toBeVisible()
  }),

  it('should type the username and password in the fields and submitted form', async () => {
    const user = userEvent.setup()
    const mockName = 'user'
    const mockEmail = 'user@mail.com'
    const mockMessage = 'Hello!'

    render(<ContactForm />)

    const usernameInput = screen.getByRole('textbox', { name: 'username' })
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const textAreaInput = screen.getByRole('textbox', { name: 'message' })
    const buttonForm = screen.getByText('Send your message')

    await user.type(usernameInput, mockName)
    await user.type(emailInput, mockEmail)
    await user.type(textAreaInput, mockMessage)
    await user.click(buttonForm)

    expect(screen.queryByText('Usuário precisa ter 4 digitos no mínimo.')).not.toBeInTheDocument()
    expect(screen.queryByText('Digite um email valido')).not.toBeInTheDocument()

    const contactForm = screen.getByRole('form', { name: 'contact-form' })

    expect(contactForm).toHaveFormValues({
      username: mockName,
      email: mockEmail,
      message: mockMessage
    })
  })
})