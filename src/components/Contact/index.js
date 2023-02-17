import Loader from "react-loaders";
import './index.scss';

const Contact=()=>{return(
        <>
        <div className="contact-page">
            <div className="text-zone">
                <h1>Contact me</h1>
            </div>
            <div className="contact-form">
                <form>
                    <ul>
                        <li className="half">
                        <input type="text" name="name" placeholder="Name" required/>
                        </li>
                        <li className="half">
                        <input type="email" name="email" placeholder="Email" required/>
                        </li>
                        <li className="half">
                        <input type="text" name="subject" placeholder="Subject" required/>
                        </li>
                        <li className="half">
                        <textarea name="message" placeholder="Message" required/>
                        </li>
                        <li>
                            <input type="button" className="flat-button" value="SEND"></input>
                        </li>
                    </ul>
                </form>

            </div>
        </div>
        <Loader type="pacman"/>
        </>

    )

}

export default Contact;