import React from 'react';

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
    
    getResumeData = async() => {
        const load = document.getElementById('siteLoading')
        const url = '/resumeData.json'
        const api_call = await fetch(url)
        const data = await api_call.json()
        this.setState({
            resumeData: data
        })
        setTimeout(() => {
            load.outerHTML=''
        },500)
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