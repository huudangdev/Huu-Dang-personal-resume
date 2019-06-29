
import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>
                  <br/>
            </div>

         </div>

         <div className="row">

            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   Nguyen Tran Huu Dang<br />
						   {state}, {city} <br />
						   <span>{phone}</span><br />
               <span><a href="mailto:dang.nguyentranhuu@gmail.com">{email}</a></span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;