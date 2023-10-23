import React from 'react';
import styles from './Nav.module.css';
import GalleryBtn from './GalleryBtn';
import Link from 'next/link';


export default function Nav() {
   
    return (
        <div className={ styles.sidebar } >
            <div className='text-center space-y-5'>
                <div>
                    <Link href='/'>Z.G.</Link>
                </div>
                <div>
                    <GalleryBtn/>
                </div>
                <div>
                    <Link href='/about'>About</Link>    
                </div>
            </div>
        </div>
    )
 }
