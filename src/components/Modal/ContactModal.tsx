// Components
import { ContactForm } from "@/components/form/contactForm/contactForm";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Icons
import { RiSendPlaneFill } from "react-icons/ri";

export const ContactModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Contact <RiSendPlaneFill /></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Papyrus</DialogTitle>
          </DialogHeader>
          {/* Contact Form */}
          <ContactForm />
        </DialogContent>
      </Dialog>
    </>
  );
};
