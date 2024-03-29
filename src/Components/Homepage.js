import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function Homepage() {
    return (
        <>
            <Link to='/home'>
                <div class="dup"></div>
                <img class="sale-img1" src={require('../image/sale.png')}></img>
                <img class="joinimg" src={require('../image/forwomen.jpg')}></img>
                <img class="joinimg" src={require('../image/formen.jpg')}></img>
            </Link>

        </>
    )
}

export default Homepage;