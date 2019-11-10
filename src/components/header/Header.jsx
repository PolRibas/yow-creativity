import React, { Component } from 'react'

import {ReactComponent as Logo} from '../../logo.svg';

export default class Header extends Component {
    render() {
        return (
            <div className='principal-header'>
                <div className='logo-container'>
                    <Logo />
                </div>
                <div className='nav-container'>
                    <p>Work</p>
                    <p>Our Projects</p>
                    <p>About</p>
                </div>
            </div>
        )
    }
}
