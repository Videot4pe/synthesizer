export enum PageKey {
  Login,
  Signup,
  Synthesizer
}

export const PATH_GENERATOR = {
  [PageKey.Login]: () => '/login',
  [PageKey.Signup]: () => '/sign-up',
  [PageKey.Synthesizer]: () => '/'
};
