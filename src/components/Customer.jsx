import React from 'react'
import './Customer.css'

export default function Customer() {
    return (
        <div id='contact' class="Support-Container">
            <div class="Support-Upper-section" data-aos-duration="1500" data-aos="zoom-in">
                <div className="SupWrapper">
                    <span class="Support-sub-title">Get in touch with our friendly support</span>
                    <h2 class="Support-title">CUSTOMER SUPPORT</h2>
                    <p>Have a question or need help? Contact our friendly support team.</p>
                </div>
            </div>
            <div class="row mb-none-30" data-aos-duration="1500" data-aos="fade-up">
                <div class="col-lg-12 mb-30 wow zoomIn" data-wow-duration="0.5s" data-wow-delay="0.3s">
                    <div class="support-card">
                        <div class="support-card__thumb">
                            <img src="assets/1.png" alt="image" />
                        </div>
                        <div class="support-card__content">
                            <h3 class="support-card__title">Talk to our support team</h3>
                            <p>Reddy Book 247 is one of the oldest book in India extending its roots since 2010. Reddy Book 247 is renowned for its lighting fast service for its clients. We offer 24/7 comprehensive support.</p>
                            <div className='contect-all-btn'>
                                <div class="contect-support-btn">
                                    <a href="https://wa.me/918058266662"
                                        class="cmn-btn btn-sm text-capitalize">
                                        WhatsApp  +91 8058 26 6662
                                    </a>
                                </div>
                                <div class="contect-support-btn">
                                    <a href="https://wa.me/918058266663"
                                        class="cmn-btn btn-sm text-capitalize">
                                        WhatsApp  +91 8058 26 6663
                                    </a>
                                </div>
                                <div class="contect-support-btn">
                                    <a href="https://wa.link/918058266664"
                                        class="cmn-btn btn-sm text-capitalize">
                                        WhatsApp  +91 8058 26 6664
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
