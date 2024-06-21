import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function PortBtn() {
    return (
        <Link to="#portfolio" className='btn--port'>
            MY WORK
        </Link>
    );
}

export default function Home() {
    return (
        <div className='banner--container' id="home">
            <div className='title--and--logo'>
                <div className='home--titles'>
                    <div className='location--title'>🇨🇦 Toronto / London ON</div>
                    <h1>Jennifer Cao</h1>
                    <h3>Frontend / Design</h3>
                    <div className='btn--container'>
                        <PortBtn />
                    </div>
                </div>
                <div className='logo--container'>
                    <svg className='vector--logo' viewBox="0 0 176 142">
                        <path id="jc" d="M36.013,0l12.933,0l35.602,0l-0,103.433c-0,6.992 -1.583,13.29 -4.761,19.069c-3.187,5.737 -7.455,10.287 -12.884,13.757c-5.393,3.386 -11.314,5.073 -17.957,5.073l-13.344,0c-6.709,0 -12.597,-1.658 -17.921,-5.036l-0.053,-0.033c-5.357,-3.341 -9.628,-7.885 -12.884,-13.757l0.053,-0c-3.2,-5.816 -4.797,-11.731 -4.797,-17.884l-0,-9.935l24.354,0l-0,9.935c-0,3.262 1.12,6.345 3.197,8.923l0,0.034l0.053,0.033c2.158,2.517 4.981,4.034 8.032,4.034l13.335,0c3.133,0 6.009,-1.619 8.16,-4.273c2.208,-2.663 3.3,-6.096 3.3,-9.935l-0,-65.511c-0,-3.797 -1.102,-7.252 -3.3,-9.962c-2.151,-2.655 -5.027,-4.273 -8.16,-4.273l-12.958,0c-3.027,0 -5.743,0.81 -7.71,2.61c-1.968,1.799 -2.98,4.404 -3.263,7.425c-0.223,2.056 -0.258,6.439 -0.311,11.497l-24.28,0c0.034,-8.11 0.122,-14.491 0.311,-16.395c1.729,-10.084 7.095,-17.872 16.533,-23.83c5.369,-3.313 11.554,-4.999 18.72,-4.999Zm103.498,0l0,0.013c6.708,-0 12.633,1.694 17.957,5.073l0.053,-0c5.358,3.341 9.601,7.876 12.857,13.748c3.199,5.816 4.76,11.74 4.76,17.893l0,9.971l-24.316,-0l0,-9.971c0,-3.263 -1.122,-6.345 -3.198,-8.924l-0.053,0l-0,-0.033c-2.158,-2.516 -5,-4.062 -8.051,-4.062l-13.307,0c-3.134,0 -6.009,1.61 -8.161,4.264c-2.221,2.667 -3.299,6.121 -3.299,9.971l-0,65.507c-0,3.797 1.102,7.224 3.299,9.934c2.152,2.655 5.028,4.274 8.161,4.274l12.958,-0c3.027,-0 5.706,-0.802 7.674,-2.601c1.959,-1.793 3.012,-4.392 3.299,-7.398l-0,-0.033c0.223,-2.05 0.258,-6.436 0.311,-11.469l24.28,-0c-0.034,8.067 -0.123,14.457 -0.311,16.367c-1.732,10.101 -7.103,17.887 -16.57,23.848c-5.369,3.313 -11.517,4.972 -18.683,4.972l-12.958,-0c-6.637,-0 -12.565,-1.695 -17.957,-5.137c-5.428,-3.407 -9.694,-7.947 -12.885,-13.749c-3.174,-5.712 -4.76,-12.012 -4.76,-19.005l-0,-65.506c-0,-6.992 1.583,-13.327 4.76,-19.106c3.191,-5.744 7.445,-10.276 12.885,-13.748c5.393,-3.385 11.313,-5.073 17.957,-5.073l13.298,-0.02Z"/>
                    </svg>
                </div>
            </div>
            <div className='down--container'>
                <Link to="#about-me"><img src={`${process.env.PUBLIC_URL}/arrow.png`} alt='down' className='down--arrow'></img></Link>
            </div>
        </div>
    );
}
