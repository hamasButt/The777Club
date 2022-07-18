import '../styles/pages-styles/HomeSection3.css'
import {LionFrames} from "../components/LionFrames";

export const HomeSection3=()=>{
    let n =2
    return(
        <div className='home-section-3'>
          <div>
              <div className='sneaky-peak'>Sneak Peak</div>
              <div className='lion-frame-container'>
                  {
                      [...Array(n)].map((item,i) => <LionFrames key={i}/>)
                  }
              </div>
          </div>
        </div>

    )
}
