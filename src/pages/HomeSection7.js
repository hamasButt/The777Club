import "../styles/pages-styles/HomeSection7.css"
import triSevenLogo from "../assets/images/777logo.svg";
import fb from "../assets/images/Group 81.svg"
import twitter from "../assets/images/Group 82.svg";
import youtube from "../assets/images/Group 83.svg";
import smiley from "../assets/images/Group 156.svg";


export const HomeSection7 = () => {
    const socialLogo = [
        {
            img: fb
        },
        {
            img: twitter
        },
        {
            img: youtube
        },
        {
            img: smiley
        }
    ]
    return (
        <div className='home-section-7'>
            <div className="contact-content">
                <img src={triSevenLogo} alt="logo" className='seven-logo'/>
                <div className='contact-paragraph'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetu
                </div>

                <div className='logo-container'>
                    {
                        socialLogo.map((svgs, i) => {
                            return <img src={svgs.img} key={i} alt='img' className='logo-svg'/>
                        })
                    }
                </div>
                <hr className="solid"/>
                <div className="footer">
                    <span className='footer-text'>Copyright © 2022, 777 Club</span>

                    <div className='footer-text-holder'>
                        <span className='footer-text'>Terms & Conditions</span>
                        <span className='footer-text'>Privacy Policy</span>
                        <span className='footer-text'>Cookies Policy</span>
                    </div>

                </div>
            </div>

        </div>
    )
}
