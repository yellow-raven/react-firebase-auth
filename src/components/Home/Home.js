// Packages
import { useNavigate } from "react-router-dom";
import { auth } from '../../utils/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
// Styling
import './Home.css'

function Home() {
    
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    if (!user) navigate("/login") 
    else {
        return (
          <div className="wrapper">
            You logged in successfully!
          </div>
        );
    }
}

export default Home;