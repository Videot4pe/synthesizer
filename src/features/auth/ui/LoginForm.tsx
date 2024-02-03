import { createSignal } from "solid-js";
import { toast } from "solid-toast";
import { useAuthStore } from "../model/auth-service";
import {useNavigate} from "@solidjs/router";

const LoginForm = () => {
  const [email, setEmail] = createSignal<string>('');
  const [password, setPassword] = createSignal<string>('');
  
  const navigate = useNavigate();
  const authService = useAuthStore()
  
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      await authService.login(email(), password());
      toast.success('Login successful');
      navigate('/')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  
  return (
    <div class="flex flex-col justify-center h-full">
      <div class="flex justify-center">
        <form onSubmit={handleSubmit} class="max-w-lg space-y-6 p-4">
          <input
            type="email"
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            value={password()}
            onInput={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <button type="submit" class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;