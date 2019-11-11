import React, { Component } from 'react'
import {ReactComponent as Skate} from './noun_Skateboard_2960275.svg';
import {ReactComponent as Gloria} from './noun_Sport_1473837.svg';

export default class OurProjects extends Component {
    render() {
        return (
            <div className='our-projects'>
                <div className='project-item'>
                    <h3>Gloria</h3>
                    <Gloria />
                    <p><big>Gloria</big> is a social media platform for sports Clubs
                    to interact, share training tips, and get news.</p>
                </div>
                <div className='project-item'>
                    <h3>W.I.S.</h3>
                    <Skate className='wis-logo'/>
                    <p><big>Where I Skate</big> is a social app for skateboarders to
                    keep track of and share best skate locations and
                    to stay updated on the latest skate news.</p>
                </div>
            </div>
        )
    }
}
