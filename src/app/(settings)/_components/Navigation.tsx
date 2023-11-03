import { Item } from "@/app/(settings)/_components/Item";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { FiSettings } from "react-icons/fi";
import { PiPaintBrush } from "react-icons/pi";

export const Navigation = () => {
  return (
    <aside
      className={cn(
        "group/sidebar w-60 bg-primary-foreground overflow-y-auto relative flex flex-col pl-2"
      )}
    >
      <div className="flex items-center space-x-4 my-6">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      <Separator />
      <div className="my-4">
        <Item label="Account" icon={<FiSettings />} route="profile"/>
        <Item label="Settings" icon={<PiPaintBrush />} route="settings"/>
      </div>
    </aside>
  );
};
