import React from 'react'
import Button from '../inc/Button'
import { FaArrowRight } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import Card from '../inc/Card';
import { voteCategories } from '../../jsonfiles/voteCategorJson';

function Categories() {

    const searchCont = {
        padding: "15px",
        border: "1px solid #cccccc",
        width: "600px",
        borderRadius: "4px",
        marginRight: "20px",
        marginTop: "20px",
        marginBottom: "20px"
    }

    const searchContainer = {
        marginBottom: "50px"
    }



    return (
        <div>
            <section className='section signup-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Vote Categories <br /></h2>
                            <div style={searchContainer}>
                                <form action="" method="get">
                                    <input style={searchCont} type="seach" placeholder={" Nominee's Name, Nominee's Category"} />
                                    <Button
                                        buttonUrl={"/"}
                                        buttonText="Search"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='category-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Card voteCategories={voteCategories} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Categories