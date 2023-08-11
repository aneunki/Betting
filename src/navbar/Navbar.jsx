import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ account, tokenBalance }) {
    const [formattedTokenBalance, setFormattedTokenBalance] = useState(
        parseInt(tokenBalance, 10).toLocaleString()
    );

    useEffect(() => {
        // Update the formattedTokenBalance whenever tokenBalance changes
        setFormattedTokenBalance(parseInt(tokenBalance, 10).toLocaleString());
    }, [tokenBalance]);

    return (
        <nav className='navbar navbar-dark fixed-top shadow p-0 ' style={{backgroundColor: 'black', height:'110px'}}>
            <a style={{color:'white'}} href='https://github.com/Minkun00/Betting'>VOTE FOR LEAGUE OF LEGEND CHAMPIONSHIP KOREA </a>
            <ul>
                <ul style={{color:'white'}}>
                    Account Number: { account }<br/>
                    tokenBalance: { formattedTokenBalance }   
                </ul>            
                <ul style={{ color: 'white' }}>
                    <Link to='/owner'>
                        <button className="link-button">OWNER PAGE</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to='/'>
                        <button className="link-button">VOTE PAGE</button>
                    </Link>
                </ul>
            </ul>
        </nav>
    );
}
