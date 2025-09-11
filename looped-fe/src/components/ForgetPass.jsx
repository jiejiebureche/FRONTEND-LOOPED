import LoopedDefault from "../assets/looped.svg";

const ForgetPass = () => {
    return (
        <>
        <div className="flex h-screen w-screen bg-[url(./assets/looped-bg.png)] bg-cover bg-center bg-no-repeat items-center justify-center">
        <form className="login-form flex flex-col bg-white w-1/2 h-2/5 rounded-[10px] items-center justify-center-safe">
          <img src={LoopedDefault} alt="Looped Logo" className="size-15" />
          <p className="form-title">Forget Password</p>
          <div className="flex flex-row">
            <p className="form-text">Follow the instructions to reset your password&nbsp;</p>
          </div>
          <div className="flex flex-col w-2/3">
            <label className="field-label text-left mb-1 mt-5">OTP Code</label>
            <input placeholder="OTP Code" className="mt-1 p-2 border-1 border-solid border-gray-300 rounded-[7px]" type="text"/>
          </div>
          <button className="mt-4 bg-black rounded-full w-2/3">Submit</button>
        </form>
      </div>
        </>
    );
};

export default ForgetPass;