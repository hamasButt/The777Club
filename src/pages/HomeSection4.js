import '../styles/pages-styles/HomeSection4.css'
import {MiniRoadmapBall} from "../components/MiniRoadmapBall";
import {PointerColorStick} from "../components/PointerColorStick";
import {RoadmapBox} from "../components/RoadmapBox";

export const HomeSection4 = () => {

    const pos = [
        {stickPos: 'position1'},
        {stickPos: 'position2'},
        {stickPos: 'position3'},
        {stickPos: 'position4'},
        {stickPos: 'position5'},
        {stickPos: 'position6'},
        {stickPos: 'position7'},
        {stickPos: 'position8'},
        {stickPos: 'position9'},
        {stickPos: 'position10'},
    ]
    const leftBoxStyle = [
        {
            containerStyle: 'left-container-box1',
            text: 'The 777 Club lifestyle is fast-paced and actively seeks the best things in life. The first stage of our club is establishing a strong community based on the Clubhouse Founders Collection of 777 member passes. It’s how we live, and we want to share it with you. ',
            text1: 'Throughout late Q1, we will be focused on building our community and personally connecting with our followers, collaborating with other NFT projects, and creating meaningful partnerships.'
        },
        {
            containerStyle: 'left-container-box2',
            text: 'In April, we will purchase a plot of prime meta-estate to launch our metaverse social club. A spot where NFT holders can meet, display their NFT collections, and help monetize the space for more rewards.'
        },
        {
            containerStyle: 'left-container-box3',
            text: 'In Q3, we are headed to Mykonos because that’s what one does in the summer. That will be followed by the casual stop in Ibiza before wrapping things up for the fall/winter schedule. Get ready for some exciting events + member meet-ups across Europe this summer.'
        },
    ]
    const rightBoxStyle = [
        {
            containerStyle: 'right-container-box1',
            text: 'In early Q2, we will mint! We will sell the Clubhouse Collection to our founding members, who will reap extra rewards. Soon after, we will launch the concierge service, including a social networking aspect, and deliver our 777 Clubhouse welcome packages to your door. We will sell the Clubhouse Collection to our founding members, who will reap extra rewards.'
        },
        {
            containerStyle: 'right-container-box2',
            text: 'We will begin a merch collab with a top-tier design label in May while distributing the 777 Club Friends Airdrop. This will take us to our next in-person event, to be announced shortly after the sale.'
        },
    ]

    return (
        <div className="home-section-4">
            <div className="roadmap-container">
                <div className="roadmap">
                    <div className="roadmap-ball">
                        ROAD MAP
                    </div>
                    <MiniRoadmapBall/>
                </div>
                {
                    pos.map((item, i) => <PointerColorStick key={i} position={item.stickPos}/>)
                }
            </div>

            <div className='box-loop-container'>
                <div>
                    {
                        leftBoxStyle.map((item, i) =>
                            <RoadmapBox
                                key={i}
                                text={item.text}
                                text1={item.text1}
                                boxStyleCont={item.containerStyle}/>
                        )
                    }
                </div>
                <div>
                    {
                        rightBoxStyle.map((item, i) =>
                            <RoadmapBox
                                key={i}
                                text={item.text}
                                boxStyleCont={item.containerStyle}
                            />)
                    }
                </div>
            </div>


        </div>
    )
}

