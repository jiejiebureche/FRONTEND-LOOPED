import LoopedDefault from "../assets/looped.svg";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <div className="flex h-screen w-screen bg-[url(./assets/looped-bg.png)] bg-cover bg-center bg-no-repeat items-center justify-center">
        <form className="login-form flex flex-col bg-white w-1/2 h-3/5 rounded-[10px] items-center justify-center-safe">
          <img src={LoopedDefault} alt="Looped Logo" className="size-15" />
          <p className="form-title">Login</p>
          <div className="flex flex-row">
            <p className="form-text">Don't have an account?&nbsp;</p>
            <Link to="/signup" className="form-text">
              Sign up
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center w-full">
            <hr className="my-8 border-gray-300 border-t-2 w-full mx-7" />
            <p className="form-title">OR</p>
            <hr className="my-8 border-gray-300 border-t-2 w-full mx-7" />
          </div>
          <div className="flex flex-col w-2/3">
            <label className="field-label text-left mb-1">Email</label>
            <input
              placeholder="Email"
              className="mt-1 p-2 border-1 border-solid border-gray-300 rounded-[7px]"
              type="email"
            />
            <label className="field-label text-left mt-5 mb-1">Password</label>
            <input
              placeholder="Password"
              className="mt-1 p-2 border-1 border-solid border-gray-300 rounded-[7px]"
              type="password"
            />
            <div className="flex justify-end mt-4">
              <Link to="/forgetpass" className="form-text">
                Forget Password?
              </Link>
            </div>
          </div>
          <button className="mt-4 bg-black rounded-full w-2/3">Log in</button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
