import { Component } from 'solid-js';

import { PageKey } from '#/shared/constants/pages';

import { LoginPage } from '#/pages/login-page';
import { SignupPage } from "#/pages/signup-page";
import { SynthesizerPage } from '#/pages/synthesizer';

export const PAGE_KEY_COMPONENT: Record<PageKey, Component> = {
  [PageKey.Login]: LoginPage,
  [PageKey.Signup]: SignupPage,
  [PageKey.Synthesizer]: SynthesizerPage,
};
