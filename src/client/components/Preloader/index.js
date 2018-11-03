import React, { Component } from 'react';


import styles from './styles'; 

class Preloader extends Component {
    
    render() {
        const { className, ...props } = this.props;
        
        const rootClass = `${className || ''} ${styles.root}`
        
        return (
            <div className={rootClass} {...props}/>
        );
    }
}


export default Preloader; 