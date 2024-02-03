import { type Component } from 'solid-js';
import './styles/app.scss'

import { AppRouter } from '#/app/router';

export const App: Component = () => {
  return <AppRouter />;
};
