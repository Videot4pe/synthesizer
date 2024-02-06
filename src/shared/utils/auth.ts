const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('auth');
  if (!token) return false
  return !!JSON.parse(token)?.state?.tokens?.accessToken;
};

export default isAuthenticated;