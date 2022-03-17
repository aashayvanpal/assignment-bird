import React from 'react'
import '../css/LandingPage.css'
import line from '../images/line.svg'
const LandingPage = () => {
    return (
        <div className='section2'>
            <div className='counting'>
                <div className='part1'>
                    <h2>We provide The Best To Protect Your Users And Their Investments</h2>
                    <p>Merklabs is a reputed name in the field of blockchain technology encompassing all the segments of this revolutionary field. Pioneering the essence of blockchain security and audits, we secure your present and future through the parameters of technology. </p>
                </div>
                <div className='part2'>
                    <div className='glass'>
                        <img src={line} alt="line" />
                        <div className='glass-content'>
                        <h1>100+</h1>
                        <h2>Blockchain companies protected</h2>

                        <h1>200+</h1>
                        <h2>Issues discovered</h2>

                        <h1>10,000+</h1>
                        <h2>Analyses available per month</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage