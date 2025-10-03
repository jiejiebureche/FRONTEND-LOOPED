import LoopedDefault from "../assets/looped.svg";
import { Link } from "react-router-dom";
import api from "../api";
import { useNavigate } from "react-router-dom";
// import { AUTH_TOKEN_KEY } from "../api";
import { useState } from "react";


const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/users/api/register/", {
        email,
        password,
        username,
        name,
        age,
      });

      // // store token (no refresh token in this flow)
      // localStorage.setItem(AUTH_TOKEN_KEY, res.data.token);
      alert("Check your email to confirm your account before logging in.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row w-screen h-screen">
        <div className="h-1/3 md:h-full w-1/2">
          <div className="flex h-full md:h-full w-screen bg-[url(./assets/looped-bg.png)] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="flex flex-col bg-white h-full w-full md:h-full w-1/2 items-center justify-center">
          <form onSubmit={handleSignup} className="login-form flex flex-col bg-white w-full h-full rounded-[10px] text-[2.2vh] items-center justify-center-safe">
            {/* <img src={LoopedDefault} alt="Looped Logo" className="size-[4em]" /> */}
            <p className="form-title mt-0">Welcome to Looped!</p>
            <div className="flex flex-row">
              <p className="form-text">Already have an account?&nbsp;</p>
              <Link to="/login" className="form-text">
                Log in
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center w-full">
              <hr className="my-6 border-gray-300 border-t-2 w-full mx-7" />
              <p className="form-title">OR</p>
              <hr className="my-6 border-gray-300 border-t-2 w-full mx-7" />
            </div>
            <div className="flex flex-col w-2/3">
              <div className="flex flex-col w-full sm:flex-row justify-center gap-3">
                <div className="flex flex-col w-full">
                  <label className="field-label text-left">Name</label>
                  <input
                    placeholder="Name"
                    className="w-full h-8 sm:h-10 mt-1 p-2 border-1 border-solid border-gray-300 rounded-[7px]"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="field-label text-left">
                    Age
                  </label>
                  <input
                    placeholder="Age"
                    className="w-full h-8 sm:h-10 mt-1 p-2 border-1 border-solid border-gray-300 rounded-[7px]"
                    type="text"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>
              <label className="field-label text-left mt-3 sm:mt-5 mb-1">
                Username
              </label>
              <input
                placeholder="Username"
                className="mt-1 h-8 sm:h-10 p-2 border-1 border-solid border-gray-300 rounded-[7px]"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="field-label text-left mb-1 mt-3 sm:mt-5">
                Email
              </label>
              <input
                placeholder="Email"
                className="mt-1 h-8 sm:h-10 p-2 border-1 border-solid border-gray-300 rounded-[7px]"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="field-label text-left mt-3 sm:mt-5 mb-1">
                Password
              </label>
              <input
                placeholder="Password"
                className="mt-1 h-8 sm:h-10 p-2 border-1 border-solid border-gray-300 rounded-[7px]"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="mt-4 bg-black rounded-full w-2/3" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
