import '../styles/component-styles/roadmap-box.css'

export const RoadmapBox = ({boxStyleCont, text, text1}) => {
    return (
        <div className={`box-container ${boxStyleCont}`}>
            <div className={`box-text`}>
                {text}
                {
                    text1 && <div>{text1}</div>
                }
            </div>
        </div>
    )
}
