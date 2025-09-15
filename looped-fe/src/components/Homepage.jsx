import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div>This is the Homepage</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Homepage;
