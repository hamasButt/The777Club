import {GradientButton} from "../components/GradientButton";
import '../styles/pages-styles/HomeSection2.css'
import PassesLion from '../assets/images/Group 142.png'

export const HomeSection2 = () => {
    return (
        <div className="home-section-2">
            <div className="club-content">
                <div className="left-part">
                    <img className='passes-lion' src={PassesLion} alt=""/>
                </div>
                <div className="right-part">
                    <h2 className='club-heading'>The 777 Club</h2>
                    <div className='club-paragragh'>We are the 777Club, a global collective of like-minded individuals with a DeFi lifestyle who
                        appreciate access to the finest things in life. We have a lot planned. The wildest events,
                        real-world benefits like none-other, a metaverse social club, connections to new business
                        opportunities, and a ton more.
                    </div>
                    <div className='club-paragragh second'> Our NFT collection is a launchpad to the best things
                        in life and we want to give you the chance to share it with us. Getting in early on the 777Club
                        will give you more benefits, more utility, and more opportunities to enhance your lifestyle.
                    </div>
                    <GradientButton label={'CONNECT WALLET'}/>
                </div>
            </div>
        </div>

    )
}
