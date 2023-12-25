import React from 'react';
import './Createpost.css';

const Createpost = ()=>{
    const loadfile = (event)=>{
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
        URL.revokeObjectURL(output.src)
    }};

    return(<>
        <div className='createpost'>
            {/* headre */}
            <div className='post-header'>
                <h4 style={{margin:"3px auto"}}>Create New Post</h4>
                <button id='post-btn'>Share</button>
            </div>
            {/* image-preview */}
            <div className='main-div'>
                <img id='output' src='https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg'/>
                <input type='file' accept='image/*' onChange={(event)=>{loadfile(event)}}/>
            </div>

            {/* details */}
            <div className='details'>
                <div className='card-header'>
                    <div className='card-pic'>
                        <img src='https://plus.unsplash.com/premium_photo-1661962776165-831ab8ebe324?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                    </div>
                    <h5>Hensi</h5>
                </div>
                <textarea type="text" placeholder='Write a caption...'></textarea>
            </div>
        </div>
    </>);
}

export default Createpost;