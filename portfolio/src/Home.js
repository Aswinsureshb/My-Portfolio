import React from 'react';
import './App.css';


function Home(props) {
    return(
        <div>
        <div className='designer'>
        <h2 className="card-title">Designer</h2>
            <p className="card-text">UI/UX designs, wireframes</p>
            <button className='button'>CLICK</button>
        </div>
        <div className='image'> 
            <h2>I am Aswin Sureshbabu</h2>  
        </div>
        <div className='coder'>
        <h2 className="card-title">&lt;Coder&gt;</h2>
            <p className="card-text">Front-end web development</p>
            <button className='button'>CLICK</button>
        </div>
        </div>
    );

}
export default Home;