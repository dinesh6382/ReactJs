import React, { Component } from 'react';
import Header from './Header/header';
import SectionPage from './ContentSection/sectionPage';

class Pages extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SectionPage/>
            </div>
        );
    }
}

export default Pages;