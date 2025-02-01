import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Welcome Back!
      </h2>
      <h3 className="text-xl text-gray-600 mb-8">
        Sign in to your scheduler to stay organized.
      </h3>
      <SignIn/>
    </>
  );
};

export default SignInPage;
