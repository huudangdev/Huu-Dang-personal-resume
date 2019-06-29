import React from 'react';
import $ from 'jquery';

import Navbar from '../layout/Navbar'
import AboutMe from '../layout/AboutMe'
import Resume from '../layout/Resume'
import Projects from '../layout/Projects'
import Quote from '../layout/Quote'
import Contact from '../layout/Contact'
import Footer from '../layout/Footer'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resumeData: []
        }
    }
    
    getResumeData(){
        const load = document.getElementById('siteLoading')
      $.ajax({
        url:'/resumeData.json',
        dataType:'json',
        cache: false,
        success: function(data){
          this.setState({resumeData: data});
          setTimeout(()=>{
            load.outerHTML='';
          },500)
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
          alert(err);
        }
      }, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    }

    componentDidMount() {
        this.getResumeData()
    }

    render() { 
        return (  
            <>
                <Navbar data={this.state.resumeData.main}/>
                <AboutMe data={this.state.resumeData.main}/>
                <Resume data={this.state.resumeData.resume}/>
                <Projects data={this.state.resumeData.portfolio}/>
                <Quote data={this.state.resumeData.testimonials}/>
                <Contact data={this.state.resumeData.main}/>
                <Footer data={this.state.resumeData.main}/>
            </>
        );
    }
}
 
export default Home;
