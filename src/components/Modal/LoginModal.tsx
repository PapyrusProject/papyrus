//modal
import { LoginForm } from "../form/loginForm/LoginForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/Button";
import { GoogleButtons } from "@/app/(application)/_components/SocialLogin";
import { Separator } from "@/components/ui/separator";

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Papyrus</DialogTitle>
          <DialogDescription>
            Make your login and go to the notes.
          </DialogDescription>
        </DialogHeader>
        {/* Login Form and buttons */}
        <LoginForm />
        <Separator />
        <GoogleButtons />
      </DialogContent>
    </Dialog>
  );
}
