import LoopedDefault from "../assets/looped.svg";
import {Link} from "react-router-dom";

const SignUpForm = () => {
  return (
    <>
      <div className="flex flex-row w-screen h-screen">
        <div className="w-1/2">
          <div className="flex h-screen w-screen bg-[url(./assets/looped-bg.png)] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="bg-white w-1/2 flex flex-col items-center justify-center">
          <form className="login-form flex flex-col bg-white w-1/2 h-full rounded-[10px] items-center justify-center-safe">
            <img src={LoopedDefault} alt="Looped Logo" className="size-15" />
            <p className="form-title">Welcome to Looped!</p>
            <div className="flex flex-row">
              <p className="form-text">Already have an account?&nbsp;</p>
              <Link to="/login" className="form-text">
                Log in
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center w-full">
              <hr className="my-8 border-gray-300 border-t-2 w-full mx-7" />
              <p className="form-title">OR</p>
              <hr className="my-8 border-gray-300 border-t-2 w-full mx-7" />
            </div>
            <div className="flex flex-col w-2/3">
              <label className="field-label text-left mb-1">Username</label>
              <input
                placeholder="Username"
                className="mt-1 p-2 border-1 border-solid border-gray-300 rounded-[7px]"
                type="text"
              />
              <label className="field-label text-left mb-1 mt-5">Email</label>
              <input
                placeholder="Email"
                className="mt-1 p-2 border-1 border-solid border-gray-300 rounded-[7px]"
                type="email"
              />
              <label className="field-label text-left mt-5 mb-1">
                Password
              </label>
              <input
                placeholder="Password"
                className="mt-1 p-2 border-1 border-solid border-gray-300 rounded-[7px]"
                type="password"
              />
            </div>
            <button className="mt-4 bg-black rounded-full w-2/3">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
