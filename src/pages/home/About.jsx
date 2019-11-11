import React, { Component } from 'react'

import Pol from '../../images/Pol.jpg';
import Esther from '../../images/Yo.jpg';
import Rose from '../../images/Rose.jpg';
import Nico from '../../images/Nico.jpg';
export default class About extends Component {
    render() {
        return (
            <div className='principal-about'>
                <div className='text-about'>
                    <h3><big>Yow</big> is a creative agency making awesome digital 
                        products for real people.</h3>
                </div>
                <div className='people-about'>
                    <div className='people-unit'>
                        <img src={Pol} alt='Pol Ribas' />
                        <p className='title'>Pol Ribas</p>
                        <p>CEO - CTO</p>
                        <p>& Joker Twin</p>
                    </div>
                    <div className='people-unit'>
                        <img src={Rose} alt='Pol Ribas' />
                        <p className='title'>Rose Palmieri</p>
                        <p>Art Director UX/UI</p>
                        <p>& Pizza Lover</p>
                    </div>
                    <div className='people-unit'>
                        <img src={Nico} alt='Pol Ribas' />
                        <p className='title'>Nicolás Urman</p>
                        <p>Back End Director</p>
                        <p>& Reading/Writing lover</p>
                    </div>
                    <div className='people-unit'>
                        <img src={Esther} alt='Pol Ribas' />
                        <p className='title'>Esther Bernal</p>
                        <p>Project Manager</p>
                        <p>& Owner of a little Zoo</p>
                    </div>
                </div>
                <div className='text-about'>
                    <h3 className='final-text'>Interested in working with us? <big>Contact us!</big></h3>
                </div>
            </div>
        )
    }
}
