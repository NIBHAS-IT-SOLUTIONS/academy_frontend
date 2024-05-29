import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Nav_back.css'



function Nav_back() {
    const [scrolled, setScrolled] = useState(false);
 



    const handleScroll = () => {
        if (window.scrollY > 30) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header id='bcontainer-header' className={scrolled ? 'change-color' : ''}>

                <Link to="#" className='blogo'><span>Edu Rainbow</span></Link>
                
                <div className="bmain">
                    <Link to="/" className='back-btn'>Back to home</Link>

                </div>

            </header>
        </>
    )
}

export default Nav_back



