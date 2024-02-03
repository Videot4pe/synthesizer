import {toast} from "solid-toast";

export const handleSuccess = (message: string, duration = 2000) => toast.success(message, {
  duration,
  position: 'top-center',
});