import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="border-top">
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col">
                        <img src="media/images/logo.png" alt="Footer Image" className="footerImg"></img>
                        <p>&copy;2024 - 2026, Not TradeMate Booking Ltd. All rights reserved.</p>
                    </div>
                    <div className="col">
                        <p>Company</p>
                        <div className="footer-links">
                            <a href="">About</a><br />
                            <a href="">Products</a><br />
                            <a href="">Pricing</a><br />
                            <a href="">Referral programe</a><br />
                            <a href="">Carrers</a><br />
                            <a href="">TradeMate.tech</a><br />
                            <a href="">Press and media</a><br />
                            <a href="">TradeMate cares</a><br />
                        </div>
                    </div>
                    <div className="col">
                        <p>Support</p>
                        <div className="footer-links">
                            <a href="">Contact</a><br />
                            <a href="">Support portal</a><br />
                            <a href="">TM-connect blog</a><br />
                            <a href="">List of charges</a><br />
                            <a href="">Downloads and resources</a><br />
                        </div>
                    </div>
                    <div className="col">
                        <p>Account</p>
                        <div className="footer-links">
                            <a href="">Open an account</a><br />
                            <a href="">Fund transfer</a><br />
                            <a href="">30 days challenge</a><br />
                        </div>
                    </div>
                </div>
                <div className="mt-5 text-muted footerText">
                    <p>TradeMate is a modern stock trading platform designed to help investors make smarter decisions. With real-time data, powerful tools, and a secure environment, we make trading accessible, reliable, and efficient for everyone.</p>
                    <p>At TradeMate, we blend cutting-edge technology with a user-friendly experience. From live market trends to personalized portfolio insights, we’ve got everything you need to stay ahead in the stock market.</p>
                    <p>TradeMate empowers traders and investors to navigate the markets with confidence. Our goal is to simplify stock trading through intuitive design, data-driven insights, and continuous innovation.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;