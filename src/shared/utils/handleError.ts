import {toast} from "solid-toast";

export const handleError = (error: any) => {
  toast.error(error.response.data?.message ?? error.response.statusText, {
    duration: 2000,
    position: 'top-center',
  });
}