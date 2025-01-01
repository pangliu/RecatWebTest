import React, { useState } from 'react';
import styles from './Register.module.css';

function Pending() {
    return (
        <div className={styles.layoutContainer}>
            <div className={styles.bgTop}></div>
            <div className={styles.icTopLeft}></div>
            <div className={styles.pageTitle}>Pending review</div>
            <div className={styles.registerContainer}>
                <div>
                    <span className={styles.contentTextBlack}>
                        our registration has been submitted for
                    </span>
                    <span className={styles.contentTextRed}> manual review.</span>
                </div>
                <div>
                    <span className={styles.contentTextBlack}>
                        You will be notified via email within
                    </span>
                    <span className={styles.contentTextRed}>
                        {' '}
                        1-3 business days.
                    </span>
                </div>
                <img className={styles.divider}></img>
                <div className={styles.pendingContentText}>
                    <span>We're working on your register</span>
                    <br />
                    <span> to be sure you can become one of us</span>
                </div>
                <div className={styles.containerFlex}>
                    <div className={styles.bgPending}></div>
                    <img className={styles.divider}></img>
                    <button className={styles.PendingBtn}>OK</button>
                </div>
            </div>
        </div>
    );
}
export default Pending;
