import React, { Component } from 'react'

import Nexow from '../../images/nexow.jpg';
import Surmile from '../../images/surmile.png';

export default class Work extends Component {
    render() {
        return (
            <div className='work-container'>
                <div className='work-item'>
                    <img src={Nexow} alt='nexow' />
                    <p><big>Nexow</big> is a trading firm based in Poble Nou. Yow is currently
                    building Nexow’s new responsive website and online platform as
                    they expand their profile to include an inhouse academy to train
                    future traders and quants.</p>
                </div>
                <div className='work-item'>
                    <img src={Surmile} alt='nexow' />
                    <p><big>Surmile</big> is a company provding subscription children’s
                    clothing boxes. Yow has been building Surmile’s mobile app.</p>
                </div>
            </div>
        )
    }
}
