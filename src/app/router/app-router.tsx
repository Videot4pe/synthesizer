import { Router, Route } from "@solidjs/router";
import MainLayout from "#/shared/ui/MainLayout";
import { LoginPage } from "#/pages/login-page";
import { SignupPage } from "#/pages/signup-page";
import { SynthesizerPage } from "#/pages/synthesizer";

export const AppRouter = () => {
  return (
    <Router>
      <Route path="/login" component={LoginPage} />
      <Route path="/sign-up" component={SignupPage} />
      <Route path="/" component={SynthesizerPage} />
      {/*<Route*/}
      {/*  path="/"*/}
      {/*  component={*/}
      {/*    <MainLayout>*/}
      {/*      <SynthesizerPage />*/}
      {/*    </MainLayout>*/}
      {/*  }*/}
      {/*/>*/}
    </Router>
  )
};
