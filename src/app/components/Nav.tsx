import React from 'react';
import styles from './Nav.module.css';

export default function Nav() {
    return (
        <div className={styles.sidebar} >
            <div>
                <div>Z.G.</div>
            </div>
            <div>
                <img />
                <div>Gallery</div>
            </div>
            <div>
                <div>About</div>    
            </div>
        </div>
    )
 }
