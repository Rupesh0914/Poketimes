import React from 'react';
import Rainbow from '../hoc/Rainbow'

const Contact = (props) => {
    //setTimeout(() => {
      //  props.histroy.push('/about')
    // }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>This is an contact histroy of the companys</p>
        </div>
    )
}

export default Rainbow(Contact);