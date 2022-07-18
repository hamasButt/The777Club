import lion1 from '../assets/images/Group 161.png'
import lion2 from '../assets/images/Group 103.png'
import lion3 from '../assets/images/Group 106.png'
import lion4 from '../assets/images/Group 159.png'
import lion5 from '../assets/images/Group 168.png'
import lion6 from '../assets/images/Group 159.png'
import lion7 from '../assets/images/Group 102.png'
import lion8 from '../assets/images/Group 169.png'
import lion9 from '../assets/images/Group 161.png'

import '../styles/component-styles/lion-frame.css'

export const LionFrames = () => {

    const frames1 = [
        {img: lion1},
        {img: lion2},
        {img: lion3},
    ]
    const frames2 = [
        {img: lion4},
        {img: lion5},
        {img: lion6},
    ]
    const frames3 = [
        {img: lion7},
        {img: lion8},
        {img: lion9},
    ]
    let n = 3

    return (
        <>
            <div className="frame-container">
                <div className='lion-img-container'>
                    {
                        frames1.map((image, i) => {
                            return <img key={i} src={image.img} className='lion-frame' alt='lion'/>
                        })
                    }
                </div>
                <div className='lion-img-container middle-lions'>
                    {
                        frames2.map((image, i) => {
                            return <img key={i} src={image.img} className='lion-frame' alt='lion'/>
                        })
                    }
                </div>
                <div className='lion-img-container'>
                    {
                        frames3.map((image, i) => {
                            return <img key={i} src={image.img} className='lion-frame' alt='lion'/>
                        })
                    }
                </div>
            </div>
        </>
    )
}
