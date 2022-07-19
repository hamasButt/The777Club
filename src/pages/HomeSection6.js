import '../styles/pages-styles/HomeSection6.css'
import {Faqs} from "../components/Faqs";


export const HomeSection6=()=>{

    const faq1=[
        'Why NFT Trading is so popular?',
        'How do you trade on Montono easily?'
    ]

    const faq2=[
        'What is the best way to collect NFT?',
        'Why NFT Trading is so popular?',
        'How do you trade on Montono easily?',
        'What is the best way to collect NFT?',
        'How do you trade on Montono easily?'
    ]

    return(
        <div className='home-section-6'>
            <div className='faqs-heading'>Frequently Asked Questions</div>
            <div className="faq-section">
                <Faqs question='What is the best way to collect NFT?'/>

                <div className='question-paragraph'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                    est
                </div>
                {
                    faq1.map((item,i)=><Faqs key={i} question={item}/>)
                }
                {
                    faq2.map((item,i)=><Faqs key={i} question={item}/>)
                }
            </div>
        </div>
    )
}
