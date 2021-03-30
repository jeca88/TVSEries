import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    state = {}

    render() {
        return ( 
            <footer>
                <div className="footer">
                    <p>&copy</p>
                    <p>{new Intl.DateTimeFormat('en-GB', { 
                        month: 'long', 
                        day: '2-digit',
                        year: 'numeric', 
                    }).format(new Date())}</p>
                </div>
            </footer>
         );
    }
}

export default Footer;