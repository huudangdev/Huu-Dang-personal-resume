import React, { Component } from 'react';

class AboutMe extends Component {
    render() { 
        if (this.props.data){
            var fullname = this.props.data.fullname;
            var profilepic= "images/"+this.props.data.image;
            var bio = this.props.data.bio;
            var born = this.props.data.born;
            var phone= this.props.data.phone;
            var email = this.props.data.email;
            var resumeDownload = this.props.data.resumedownload;
        }

        return (  
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic"  src={profilepic} alt="Huu Dang" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>{bio}</p>
                        <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
						        <span>{fullname}</span><br />
						        <span>{phone}</span><br />
                                <span><a href="mailto:dang.nguyentranhuu@gmail.com" target="_blank">{email}</a></span><br/>
                                <span><a href="http://decoding.home.blog" target="_blank">decoding.home.blog</a></span>
					        </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Download CV PDF</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
 
export default AboutMe;