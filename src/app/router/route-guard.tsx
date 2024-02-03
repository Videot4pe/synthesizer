import { createEffect } from "solid-js";
import { useNavigate } from "@solidjs/router";
import isAuthenticated from "#/shared/utils/auth";

export default function RouteGuard(props: { children: any }) {
  const navigate = useNavigate();
  const auth = isAuthenticated()
  
  createEffect(() => {
    if(!auth) {
      navigate('/login', { state: { from: location.pathname } });
    }
  })
  
  return (
    <>{ props.children }</>
  )
}

