import React from 'react';
import styles from './Mybutton.scss';
const Mybutton = (props) => {
    console.log(props);
    return (
        <div className={styles.Mybutton}>
            <div className={styles.container}>
                {props.children}
            </div>
        </div>
    );
}

export default Mybutton;
