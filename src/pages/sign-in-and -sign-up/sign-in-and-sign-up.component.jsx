import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import "./sign-in-and-sign-up.style.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="s-and-s-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
