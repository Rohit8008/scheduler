import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Create an Account
      </h2>
      <h3 className="text-xl text-gray-600 mb-8">
        Sign up to start using your scheduler.
      </h3>
      <SignUp />
    </>
  );
};

export default SignUpPage;
