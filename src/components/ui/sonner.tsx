import {
  Bug,
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <Bug className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      closeButton={true}
      richColors={true}
      position="top-right"
      offset={{ top: "10vmax" }}
      mobileOffset={{ top: "9vmax" }}
      toastOptions={{
        classNames: {
          title: "font-bold!",
          actionButton: "bg-primary-dark!",
          error: "text-error! border-error!",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
