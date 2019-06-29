import React, { Component } from 'react';
import SmoothScroll from 'smooth-scroll';

class Footer extends Component {
  render() {
    new SmoothScroll('a[href*="#"')
    if(this.props.data){
      var networks= this.props.data.social.map((network) => {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

        <div className="row">
            <div className="twelve columns">
                <ul className="social-links">
                    {networks}
                </ul>

                <ul className="copyright">
                    <li>Powered by <a title="Styleshout" href="https://reactjs.org/" target="_blank">ReactJs</a></li>
                </ul>

            </div>
            <div id="go-top"><a data-scroll className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
    </footer>
    );
  }
}

export default Footer;