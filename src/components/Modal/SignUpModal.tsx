//modal
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/Button";
import { RegisteForm } from "@/components/form/registerForm/RegisterForm";

export default function SignUpModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >SignUp</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Papyrus</DialogTitle>
          <DialogDescription>Register and go to the notes.</DialogDescription>
        </DialogHeader>
        <RegisteForm />
      </DialogContent>
    </Dialog>
  );
}
