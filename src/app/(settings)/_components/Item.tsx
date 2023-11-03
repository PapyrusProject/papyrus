import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type ItemProps = {
  label: string;
  icon: React.ReactNode;
  route: string;
};

export const Item = ({ label, icon, route }: ItemProps) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/${route}`);
  };

  return (
    <div
      role="button"
      className={cn(
        "group flex items-center justify-start gap-4 hover:bg-secondary py-1 px-4 relative"
      )}
      onClick={() => handleNavigate()}
    >
      <div className="h-4 w-1 bg-primary absolute left-0 rounded-tr-2xl rounded-br-2xl opacity-0 group-hover:opacity-100 transition duration-200"></div>
      <p className="w-4 h-4 text-muted-foreground">{icon}</p>
      {label}
    </div>
  );
};
