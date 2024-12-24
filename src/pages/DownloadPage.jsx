import './DownloadPage.css';
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function DownloadPage() {
    const url = 'https://www.example.com'; // 這是你想顯示的 QR Code 資料
    return (
        <div className="page-container">
            <image className="img-ninja"></image>
            <div className="qrcode-container">
                <QRCodeSVG
                    className="qrcode-svg"
                    value={url}
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                />
                <a className="url" href={url} target="_blank">
                    click it to download APK
                </a>
            </div>
            <div className="warrning-container">
                <div className="warrning-title">
                    <img className="img-icon"></img>
                    <div className="text-title">Attention</div>
                </div>
                <p>
                    <span className="text-white">
                        Congrats on passing the review!
                    </span>
                    <span className="text-red">
                        {' '}
                        Scan the QR Code on the webpage to download the APK.
                    </span>
                </p>
                <p>
                    <span className="text-white">Note: The link expires</span>
                    <span className="text-red"> in 15 minutes,</span>
                    <span className="text-white">
                        {' '}
                        so download it promptly.
                    </span>
                </p>
            </div>
        </div>
    );
}

export default DownloadPage;
