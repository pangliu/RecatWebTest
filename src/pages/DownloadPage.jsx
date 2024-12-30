import './DownloadPage.css';
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function DownloadPage() {
    const url = 'https://github.com/pangliu/apk-download/raw/refs/heads/main/app-dev-debug-androidTest.apk'; // 這是你想顯示的 QR Code 資料
    return (
        <div className="page-container">
            <div className="img-ninja"></div>
            <div className="qrcode-container">
                <a href={url} style={{ display: "inline-block" }}>
                    <QRCodeSVG
                        className="qrcode-svg"
                        value={url}
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                    />
                </a>
            </div>
            <div className="warrning-container">
                <div className="warrning-title">
                    <div className="img-icon"></div>
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
