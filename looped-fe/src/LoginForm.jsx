import LoopedDefault from "./assets/looped.svg";

function LoginForm(){
    return (
        <>
            <div className="flex h-screen w-screen bg-[url(./assets/looped-bg.png)] bg-cover bg-center bg-no-repeat items-center justify-center">
                <div className="flex flex-col bg-white w-1/2 h-3/5 rounded-[10px] items-center justify-center">
                    <img src={LoopedDefault} alt="Looped Logo" className="size-10"/>
                    <h2 className="form-title-text">Log In</h2>
                    <p className="form-text">Don't have an account? <a style={{ textDecoration: "underline", color: "#000000bb", cursor: "pointer"}}>Sign Up</a></p>
                    <div className="flex flex-col form-input-container w-full items-center justify-center">
                        <div className="flex flex-col items-center w-full">
                            <p className="form-text">Email</p>
                            <input type="text" placeholder="Email" className="form-input border rounded-[5px] w-2/3 py-1 px-1"/>
                        </div>
                        <div>
                            <p className="form-text">Password</p>
                            <input type="password" placeholder="Password" className="form-input border rounded-[5px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm;