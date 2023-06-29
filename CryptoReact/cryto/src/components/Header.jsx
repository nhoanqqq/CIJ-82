import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ back }) {
    return (
        <header className='header'>
            <div className='width'>
                {back && (<Link to="/">
                    <img src="https://th.bing.com/th/id/OIP.0KiDgWO1xL8daUoh61QUBwHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" className='photo'/>
                </Link>)}
                <h1><Link to="/">Coins</Link></h1>
            </div>
        </header>
    )
}