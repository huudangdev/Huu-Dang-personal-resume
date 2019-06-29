import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

import Navbar from './components/layout/Navbar'
import AboutMe from './components/layout/AboutMe'
import Resume from './components/layout/Resume'
import Projects from './components/layout/Projects'
import Quote from './components/layout/Quote'
import Contact from './components/layout/Contact'
import Footer from './components/layout/Footer'

class App extends Component {
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
 
export default App;
