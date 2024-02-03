import create from 'solid-zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { AuthApi } from "#/features/auth/api";

interface AuthState {
  user: { email: string } | null;
  tokens: { refreshToken: string, accessToken: string } | null;
  isAuthenticating: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(persist((set) => ({
  user: null,
  tokens: null,
  isAuthenticating: false,
  error: null,
  login: async (email, password) => {
    set({ isAuthenticating: true, error: null });
    try {
      const response = await AuthApi.login({ email, password });
      set({ tokens: { refreshToken: response.data.refreshToken, accessToken: response.data.accessToken }, isAuthenticating: false });
    } catch (error) {
      // @ts-ignore
      set({ error: error.response?.data?.message || 'Login failed', isAuthenticating: false });
    }
  },
  register: async (email, password) => {
    set({ isAuthenticating: true, error: null });
    try {
      const response = await AuthApi.signup({ email, password });
      set({ tokens: { refreshToken: response.data.refreshToken, accessToken: response.data.accessToken }, isAuthenticating: false });
    } catch (error) {
      // @ts-ignore
      set({ error: error.response?.data?.message || 'Registration failed', isAuthenticating: false });
    }
  },
  logout: () => {
    set({ user: null, tokens: null });
  },
}), {
  name: 'auth',
  storage: createJSONStorage(() => localStorage),
}));