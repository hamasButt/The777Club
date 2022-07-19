import '../styles/pages-styles/HomeSection1.css'
import triSevenLogo from '../assets/images/777logo.svg'
import {GradientButton} from "../components/GradientButton";
import {LionFrames} from "../components/LionFrames";
import {HomeSection2} from "./HomeSection2";

export const HomeSection1 = () => {
    const navItems = [
        {name: 'Home'},
        {name: 'About Us'},
        {name: 'Road Map'},
        {name: 'Team'},
        {name: 'Wallet Collect'},
        {name: 'Minting'},
    ]
    return (
        <div className='home-section-1'>
            <div className="navigation">

                <img src={triSevenLogo} alt="logo"  className='nav-logo'/>

                <ul className="navbar">
                    {
                        navItems.map((item, i) => {
                            return <li key={i}><a href="#">{item.name}</a></li>
                        })
                    }
                    <GradientButton label={'CONTACT US'}/>
                </ul>
            </div>

            <div className="content">
                <div className="left-section">
                    <h1 className='main-heading'>777 Clubhouse Founders Collection</h1>
                    <div className='middle-heading'>Elevate your lifestyle</div>
                    <GradientButton label={'CONNECT WALLET'}/>
                </div>
                <div className="right-section">
                   <LionFrames/>
                </div>
            </div>
        </div>
    )
}
