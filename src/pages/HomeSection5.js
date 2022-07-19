import '../styles/pages-styles/HomeSection5.css'
import founders1 from "../assets/images/Group 180.png";
import founders2 from "../assets/images/Group 181.png";
import founders3 from "../assets/images/Group 182.png";
import twitter from "../assets/images/Group 82.svg";
import insta from "../assets/images/Group 80.svg";


export const HomeSection5=()=>{
    const socialLogo = [
        {
            img: insta
        },
        {
            img: twitter
        },

    ]
    return(
        <div className='home-section-5'>
            <div className='founding-team-heading'>Meet Our Founding Team</div>


            <div className="founding-team-content">
                <div className="founders-left">
                    <img className='founders-image' src={founders1} alt=""/>
                </div>
                <div className="founders-right">
                    <div className='founder-desp'>10+ years of experience in the hospitality/entertainment industry
                        The latest venture is currently in Ycombinator’s Winter ‘22 Class BA in Finance, loves to stay
                        fit, travel, & live life to the fullest.10+ years of experience in the hospitality/entertainment
                        industry
                    </div>
                    <div >
                        {
                            socialLogo.map((svgs, i) => {
                                return <img src={svgs.img} key={i} alt='img' className='logo-svg-hs5'/>
                            })
                        }
                    </div>
                </div>
            </div>


            <div className="founding-team-content founder-second-content">

                <div className="founders-left left-founder">

                    <div className='founder-desp founder-desp2'>Hospitality Tech Founder + Crypto/Web3 Investor Holder of BAYC, MAYC,
                        Meebits, & more Avid golfer
                    </div>
                        {
                            socialLogo.map((svgs, i) => {
                                return <img src={svgs.img} key={i} alt='img' className='logo-svg-hs5'/>
                            })
                        }
                </div>

                <div className="founders-right founder-img-cont">
                    <img className='founders-image ' src={founders2} alt=""/>

                </div>
            </div>

            <div className="founding-team-content">
                <div className="founders-left">
                    <img className='founders-image' src={founders3} alt=""/>
                </div>
                <div className="founders-right">
                    <div className='founder-desp'>10+ years of experience in the hospitality/entertainment industry
                        The latest venture is currently in Ycombinator’s Winter ‘22 Class BA in Finance, loves to stay
                        fit, travel, & live life to the fullest.10+ years of experience in the hospitality/entertainment
                        industry
                    </div>
                    <div>
                        {
                            socialLogo.map((svgs, i) => {
                                return <img src={svgs.img} key={i} alt='img' className='logo-svg-hs5'/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
