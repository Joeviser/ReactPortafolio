
import { Link, Route, Routes } from 'react-router-dom';
import photo from "../../images/MIS.jpg";
import "../Home/Home.css";

function Home() {
    

    return (
      <>
     
        < div className="home">
        
        <h1>Isabel Solana</h1>
        <img src={photo} alt="My Photo" /> 
        <p>
         Freelance frond end developer based in London. I specialise in building responsive, user-friendly websites and applications using HTML, CSS, JavaScript and React.
         Enrolled in a Frond-End development bootcamp with EdX.
        </p>
        <h3> Welcome to my Portfolio page!</h3>
        <h4>Click below to have a look to my Project Gallery</h4>
        <Link to="/projects" role="button" className="btn btn-link">
          Project Gallery
        </Link>
       </div>
      </>
    );
  }
  
  export default Home;