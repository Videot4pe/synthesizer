const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('auth');
  return !!JSON.parse(token)?.state?.tokens?.accessToken;
};

export default isAuthenticated;