import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>This is an about page of a website which help us tell about the histroy of everything</p>
        </div>
    )
}

export default Rainbow(About);