import Button from '../inc/Button'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import targetOneImage from '../images/targetOne.png'
import targetTwoImage from '../images/targetTwob.png'
import targetThreeImage from '../images/targetThree.png'
import targetFourImage from '../images/targetFour.png'
import TargetItems from '../inc/TargetItems';
import ConnectedAward from '../images/connected-awards.png'
import TalentItems from '../inc/TalentItems';
import TalentImageOne from '../images/talentone.png'
import TalentImageTwo from '../images/intermediate.png'
import TalentImageThree from '../images/exceptional.png'


function Home() {
    const searchCont = {
        padding: "15px",
        border: "1px solid #cccccc",
        width: "400px",
        borderRadius: "4px",
        marginRight: "20px",
        marginBottom: "20px"

    }

    const searchContainer = {
        marginBottom: "50px"
    }

    const myLine = {
        backgroundColor: "orange",
        height: "5px",
        width: "100px",
        borderRadius: "10px",
        marginTop: "15px",
    }

    const mySpacing = {
        height: "20px"
    }

    const targetContents = [
        {
            targetImage: targetOneImage,
            targetText: "Awareness"
        },
        {
            targetImage: targetTwoImage,
            targetText: "Compeition"
        },
        {
            targetImage: targetThreeImage,
            targetText: "Entertainment"
        },
        {
            targetImage: targetFourImage,
            targetText: "Recognition"
        }
    ]



    const talentContents = [
        {
            talentImage: TalentImageOne,
            talentText: "Promising Talent",
            talentParagraph: "Promising Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills."
        },
        {
            talentImage: TalentImageTwo,
            talentText: "Intermediate Talent",
            talentParagraph: "Intermediate Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills"
        },
        {
            talentImage: TalentImageThree,
            talentText: "Exceptional Talen",
            talentParagraph: "Exceptional Talent is an individual with more than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills."
        },
    ]


    return (

        <div>
            <section className='section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className='webcaption'>First Ever Tech Personality <br />
                                Award For Africans in Europe</p>
                            <div style={searchContainer}>
                                <form action="" method="get">
                                    <input style={searchCont} type="seach" placeholder="Nominee's Name, Nominee's Category" />
                                    <Button
                                        buttonUrl={"/"}
                                        buttonText="Search"
                                    />
                                </form>
                                <p>View all categorie  <FaArrowRight /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='target-section purple-bg'>
                <div className='container text-center text-white'>
                    <div className="row">
                        <h2 style={{ marginBottom: "50px" }}>Our Target</h2>
                        {
                            targetContents.map((targetcontent) => (
                                <TargetItems targetImage={targetcontent.targetImage} targetText={targetcontent.targetText} />
                            ))
                        }

                    </div>
                </div>
            </section>

            <section className='connect-award-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={ConnectedAward} className="img w-100" alt="" srcset="" />
                        </div>
                        <div className="col-md-4 ps-5">

                            <h3>The Connected Awards</h3>
                            <div style={myLine}></div>
                            <div style={mySpacing}></div>
                            <p>The connected is.....It is a long established fact that

                                a reader will be distracted by the readable content

                                of a page when looking at its layout. The point of

                                using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as opposed to using
                                'Content here, content here', making it look like
                                readable English</p>
                            <div style={mySpacing}></div>
                            <Button
                                buttonUrl={"/"}
                                buttonText="Learn more"
                            />
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </section>


            <section className='celebrated-techies-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <h3>The Connected Awards</h3>
                            <div style={myLine}></div>
                            <div style={mySpacing}></div>
                            <p>The connected is.....It is a long established fact that

                                a reader will be distracted by the readable content

                                of a page when looking at its layout. The point of

                                using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as opposed to using
                                'Content here, content here', making it look like
                                readable English</p>
                            <div style={mySpacing}></div>
                            <Button
                                buttonUrl={"/"}
                                buttonText="Learn more"
                            />
                            <div style={mySpacing}></div>
                            <div style={mySpacing}></div>
                        </div>
                        <div className="col-md-6 ps-5">
                            <div className="row">
                                <div className="col-md-6 mb-4"> <img src={ConnectedAward} className="img w-100" alt="" srcset="" /></div>
                                <div className="col-md-6 mb-4"> <img src={ConnectedAward} className="img w-100" alt="" srcset="" /></div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4"> <img src={ConnectedAward} className="img w-100" alt="" srcset="" /></div>
                                <div className="col-md-6 mb-4"> <img src={ConnectedAward} className="img w-100" alt="" srcset="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className="container">
                    <div className="row">

                        {
                            talentContents.map((talentContent) => (
                                <TalentItems
                                    talentImage={talentContent.talentImage}
                                    talentText={talentContent.talentText}
                                    talentParagraph={talentContent.talentParagraph} />
                            ))
                        }

                    </div>
                </div>

            </section>
        </div >
    )
}

export default Home
