import React from 'react'
import '../css/LandingPage.css'
import line from '../images/line.svg'
import dots from '../images/dots.png'
import illustration from '../images/Illustration.svg'
import neon1 from '../images/Neon1.svg'
import maintenance from '../images/Maintenance.svg'
// import development from '../images/Development.svg'
// import discuss from '../images/Discuss.svg'
// import work from '../images/Work.svg'
// import scene from '../images/scene.svg'
const LandingPage = () => {
    return (
        <div className='page'>
            <div className='section2'>
                <img src={dots} id="dots" alt="dots" />
                <div className='counting'>
                    {/* <div id="circle"></div> */}
                    <div id="circle-blur"></div>

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
                <img src={illustration} id="illustration" alt="illustration" />
                <div className='verification-content'>
                    <span>DEFI</span>
                    <h2>Scale the world of DeFi</h2>
                    <p>Being the veterans in the blockchain industry, we understand the hype of decentralized finance and the contemporary optimizations in the financial sector and hence taking the grasp of the moment , we have developed exceptional projects in the world of DeFi.
                    </p>
                </div>
                <img src={neon1} id="neon1" alt="neon1" />
            </div>
             
            <div className='avoid-costly-errors'>
                <div className='avoid-costly-errors-content'>
                    <span>DAPPS</span>
                    <h2>Technology made easier</h2>
                    <p>Decentralized applications have found a huge user base right in the initial stage , and therefore we as a team have gained extensive expertise into the creation of dapps.</p>
                </div>
                <img src={maintenance} id="maintenance" alt="maintenance"/>
            </div>
{/*
            <div className='detailed'>
                <img src={development} id="development" alt="development" />
                <div className='detailed-content'>
                    <span>AUDIT</span>
                    <h2>Stay secure and safe</h2>
                    <p>Above all that matters is a secure and safe smart contract that is free from any vulnerability and does not hamper the investment of the various people who have trusted you. We also provide auditing services , so that you can stay assured of the security as we are quick in auditing and exposing the bugs of your smart contract.
                    </p>
                </div>
                <img src={neon1} id="neon2" alt="neon2"/>

            </div>

            <div className='expert-review'>
                <div className='expert-review-content'>
                    <span>Expert</span>
                    <h2>Expert Review</h2>
                    <p>Experience the guidance of various trained professionals and developers who are with you at every phase of your projects. We not only develop your project but also give out the best recommendations for turning it into a huge success</p>
                </div>
                <img src={discuss} id="discuss" alt="discuss"/>

            </div>


            <div className='easy-integration'>
                <img src={work} id="work" alt="work"/>
                <div className='easy-integration-content'>
                    <span>SMART CONTRACT</span>
                    <h2>Experience the Revolution</h2>
                    <p>Merklabs has efficient developers with exceptional coding skills that can create any type of smart contract you desire and with scalable and secure code. You desire, we create it for you.</p>
                </div>
                <img src={neon1} id="neon1" alt="neon1" />

            </div>


            <div className='scenes'>
                <div className='scenes-content'>
                    <span>Launchpad</span>
                    <h2>Stabilize and Promote</h2>
                    <p>Amidst the competition in the Defi space, good marketing strategy and implementation plays the key role to stabilize and promote your growth in the blockchain industry. Retaining this awareness, we can develop launchpad and IDO for your presale and ICO. </p>
                </div>
                <img src={scene} id="scene" alt="scene" />
            </div> */}
        </div>
    )
}

export default LandingPage