import '../styles/component-styles/mini-roadmap-ball.css'


export const MiniRoadmapBall = () => {
    const miniBalls = [
        {miniBall: 'mini-ball0', text: 'Launch Initiated'},
        {miniBall: 'mini-ball1', text: 'Staking'},
        {miniBall: 'mini-ball2', text: 'Merch & Live Events'},
        {miniBall: 'mini-ball3', text: 'The Crypto Bears'},
        {miniBall: 'mini-ball4', text: 'MetaVerse'},
    ]

    return (
        <>
            {
                miniBalls.map((item, i) => {
                    return <div key={i} className={`mini-ball ${item.miniBall}`}>
                        <div key={i} className="ball-text">
                            {item.text}
                        </div>
                    </div>
                })
            }

        </>
    )
}
