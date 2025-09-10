import LoopedDefault from "./assets/looped.svg";

function LoginForm(){
    return (
        <>
            <div className="flex h-screen w-screen bg-[url(./assets/looped-bg.png)] bg-cover bg-center bg-no-repeat items-center justify-center">
                <div className="flex flex-col bg-white w-1/2 h-3/5 rounded-[10px] items-center justify-center">
                    <img src={LoopedDefault} alt="Looped Logo" className="size-10 mb-1"/>
                    <h2 className="form-title-text">Log In</h2>
                    <p className="form-text">Don't have an account? <a style={{ textDecoration: "underline", color: "#000000bb", cursor: "pointer"}}>Sign Up</a></p>
                </div>
            </div>
        </>
    )
}

export default LoginForm;