import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
function notFound(){
    return(
        <motion.div exit={{opacity:0}} transition={{duration: 0.8, type: 'tween'}}>
            <p style={{textAlign:'center', fontSize: '24px'}}>404 Error Page Not Found. Go back to <Link to="/" style={{textDecoration: 'underline'}}>home</Link>.</p>
        </motion.div>
    );
}
export default notFound;