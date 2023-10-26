// Components
import { LoginForm } from "@/components/form/formLogin/LoginForm";
import { RegisteForm } from "@/components/form/formRegister/RegisterForm";

export default function Profile() {
    return(
        <div className="flex items-center justify-center gap-12 w-full">
            <div>
                <h2>LOGIN</h2>
         <LoginForm />
            </div>
            <div>
                <h2>Registro</h2>
                <RegisteForm />
            </div>
        </div>
    )
}