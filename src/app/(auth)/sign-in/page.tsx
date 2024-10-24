import SigninForm from "./SigninForm";
import { Suspense } from "react";

function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SigninForm />
    </Suspense>
  );
}

export default SignIn;
