import React, { Component } from 'react'

import {ReactComponent as Logo} from '../../logo.svg';

class HeadSection extends Component {
    render() {
        return (
            <div className='confety-container'>
                <div className='circle-logo'>
                    <Logo />
                    <p>creativity</p>
                </div>
            </div>
        )
    }
}

export default HeadSection