import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
            {/*//this makes a call to render children components*/}
        </button>
    );
};

export default MyButton;