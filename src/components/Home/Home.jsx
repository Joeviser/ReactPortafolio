
import { Link, Route, Routes } from 'react-router-dom';
import photo from "../../images/MIS.jpg";
import "../Home/Home.css";

function Home() {
    

    return (
      <>
    
        {/* //<img src={photo} alt="My Photo" /> */}
        <h1>Isabel Solana</h1>
        <p>
         Freelance frond end developer based in London. I specialise in building responsive, user-friendly websites and applications using HTML, CSS, JavaScript and React.
         Enrolled in a Frond-End development bootcamp with EdX.
        </p>
        <h2> Welcome to my Portfolio page</h2>
        <Link to="/projects" role="button" className="btn btn-link">
          Projects
        </Link>
       
      </>
    );
  }
  
  export default Home;