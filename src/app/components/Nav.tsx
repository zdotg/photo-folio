import React from 'react';
import styles from './Nav.module.css';
import GalleryBtn from './GalleryBtn';


export default function Nav() {
   
    return (
        <div className={ styles.sidebar } >
            <div className='text-center space-y-5'>
                <div>
                    <div>Z.G.</div>
                </div>
                <div>
                    <GalleryBtn/>
                </div>
                <div>
                    <div>About</div>    
                </div>
            </div>
        </div>
    )
 }
