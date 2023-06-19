import React, {Component} from 'react';
import Footer from './Footer';
class Contact extends Component {

    render() {
        return (
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="contact-content">
                                <h2 className="section-title">Contact Me</h2>
                                <p className="contact-description">
                                    Feel free to reach out to me for any inquiries, collaborations, or just to say hello.
                                </p>
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <span>Email:</span>
                                        <p>bharath.m2020a@vitstudent.ac.in</p>
                                        <p>maheshbharath69@gmail.com</p>
                                    </div>
                                    <div className="contact-item">
                                        <span>Phone:</span>
                                        <p>9740917254</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>





        );
    }
}

export default Contact;