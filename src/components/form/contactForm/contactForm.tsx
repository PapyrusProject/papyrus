// hooks
import { useContact } from "@/components/form/contactForm/useContact";

// components
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
    const {errors, isSubmitting, register, handleSubmit} = useContact()

  return (
    <>
      <form
        aria-label="contact-form"
        action="https://formsubmit.co/papyrus@developers.org"
        onSubmit={handleSubmit(() => {})}
        method="POST"
        className="flex flex-col gap-5"
      >
        <Label className="font-semibold">Name:</Label>
        <Input
          aria-label="username"
          type="text"
          disabled={isSubmitting}
          {...register("username")}
          error={errors.username?.message}
          placeholder="Type your name"
        />
        <Label className="font-semibold">Email:</Label>
        <Input
          aria-label="email"
          type="email"
          disabled={isSubmitting}
          {...register("email")}
          name="email"
          error={errors.email?.message}
          placeholder="Type your email"
        />
        <Label className="font-semibold">Message:</Label>
        <Textarea
          aria-label="message"
          placeholder="Type your message..."
          disabled={isSubmitting}
          name="message"
        />
        <Button type="submit">
          Send your message
        </Button>
      </form>
    </>
  );
};
