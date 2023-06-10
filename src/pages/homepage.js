import Panels from "../components/panels";
import React from 'react';
import './homepage.css';
import Profile from "../components/profile";


const HomePage = () => {
    return (
        <>
            <div className="home">
                <h2 className="step-one">Latest Posts</h2>
                <div className="step1wrapper">
                    {/*<div className="hidder1"></div>*/}
                    <div className="latest-panels"><Panels/></div>
                    <div className="hidder2"></div>
                </div>

            </div>

            <div className="right-profile">
                <div className="profile"><Profile/></div>
            </div>

        </>
    )
};

export default HomePage;
