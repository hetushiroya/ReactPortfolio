//import logoName from "../../assets/Logo/logo.png"
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import './index.scss'
const Home=()=>{
    return(
        <>
        <div className='container home-page'>
            <div className="text-zone">
                <h1>Hi, <br></br> I'm Hetu Shiroya
                <br/>
                  A Full Stack Developer
                </h1>
                <h4> Summary</h4>
                <p> I have 3+ years of experience using Web Technolofies like Java, JavaEE, JPA, Hibernet, SpringBoot to make serverside Rest API.
               
                <br/>Along with that I have an experince of using JS framework like Angular, ReactJS to make a Attractive user Interface.</p>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
              
          
               

           </div>

           <Loader type="pacman"></Loader>
           </>
    )
}

export default Home;