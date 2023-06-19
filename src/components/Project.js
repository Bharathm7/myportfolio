import React, {Component} from 'react';
import Footer from './Footer';

class Projects extends Component {
    render() {


        return (
            <section className="projects-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                                <div className="about-title display-1">PROJECTS</div>
                            <br/>
                                <p className="about-description display-7 ">
                                    I have worked on a diverse range of projects that demonstrate my skills and passion for web development. With a focus on creating user-friendly and visually appealing applications, my projects span various domains, including e-commerce, social media, and more.

                                    Through these projects, I have gained hands-on experience in front-end and back-end technologies such as HTML, CSS, JavaScript, React.js, Bootstrap, Express.js, Node.js, and MongoDB. I have honed my problem-solving abilities, collaborated with teams, and delivered high-quality solutions.

                                    Each project has been an opportunity for me to learn and grow as a developer. I am constantly seeking new challenges to expand my knowledge and stay up-to-date with emerging technologies.

                                    If you would like to know more about my projects or discuss potential collaborations, please feel free to reach out. I look forward to connecting with you!

                                </p>
                            </div>
                            <div className="skills-list col-md-6">

                                <ul className="skills-list display-6">
                                    <li><a className={"link-secondary link-offset-2 link-underline link-underline-opacity-0 "} href={"https://bharathm7.github.io/wordcounter-react/"}>WORD-COUNTER</a> </li>
                                    <li><a className={"link-secondary link-offset-2 link-underline link-underline-opacity-0 "} href={"https://bharathm7.github.io/FETCH/"}>FETCH-FROM-DUMMY-LINK</a> </li>
                                    <li><a className={"link-secondary link-offset-2 link-underline link-underline-opacity-0 "} href={"https://bharathm7.github.io/agecalculator/"}>AGE-CALCULATOR</a> </li>
                                    <li><a className={"link-secondary link-offset-2 link-underline link-underline-opacity-0 "} href={"https://bharathm7.github.io/colorpick/"}>COLOR-PICKER</a> </li>
                                    <li><a className={"link-secondary link-offset-2 link-underline link-underline-opacity-0 "} href={"https://bharathm7.github.io/calculator/"}>CALCULATOR</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                    <Footer/>
            </section>

        );
    }
}

export default Projects;