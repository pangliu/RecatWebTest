import React, { useState } from 'react';
import './Pending.css';

function Pending() {
    return (
        <div className="pending-container">
            <div className="bg-top"></div>
            <div className="ic-top-left"></div>
            <div className="page-title">Pending review</div>
            <div className="register-container">
                <div>
                    <span className="content-text-black">
                        our registration has been submitted for
                    </span>
                    <span className="content-text-red "> manual review.</span>
                </div>
                <div>
                    <span className="content-text-black ">
                        You will be notified via email within
                    </span>
                    <span className="content-text-red ">
                        {' '}
                        1-3 business days.
                    </span>
                </div>
            </div>
            <img className="divider"></img>
            <div className="content-text">
                <span>We're working on your register</span>
                <br />
                <span> to be sure you can become one of us</span>
            </div>
            <div className="container-flex">
                <div className="bg_pending"></div>
                <img className="divider"></img>
                <button className="ok-btn">OK</button>
            </div>
        </div>
    );
}
export default Pending;
