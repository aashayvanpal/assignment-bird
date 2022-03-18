import React from 'react'
import '../css/LandingPage.css'
import line from '../images/line.svg'
import dots from '../images/dots.svg'
import illustration from '../images/Illustration.svg'
const LandingPage = () => {
    return (
        <div className='page'>
            <div className='section2'>
                <img src={dots} id="dots" />
                <div className='counting'>
                    <div id="circle"></div>

                    <div className='part1'>
                        <h2>We provide The Best To Protect Your Users And Their Investments</h2>
                        <p>Merklabs is a reputed name in the field of blockchain technology encompassing all the segments of this revolutionary field. Pioneering the essence of blockchain security and audits, we secure your present and future through the parameters of technology. </p>
                    </div>

                    <div className='part2'>
                        <div className='glass'>
                            <div className='glass-inner'>
                                <img src={line} id="line" alt="line" />
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
            </div>
            <div className='verification'>
                <img src={illustration} id="illustration" />
                <div className='verification-content'>
                    <span>DEFI</span>
                    <h2>Scale the world of DeFi</h2>
                    <p>Being the veterans in the blockchain industry, we understand the hype of decentralized finance and the contemporary optimizations in the financial sector and hence taking the grasp of the moment , we have developed exceptional projects in the world of DeFi.
                    </p
                    ></div>
            </div>


        </div>
    )
}

export default LandingPage