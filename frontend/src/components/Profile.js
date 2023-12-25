import React from 'react'
import "./profile.css"

const Profile = () => {
  return (
    <div className='profile'>
      {/* profile frame */}
      <div className='profile-frame'>
        {/* profile pic */}
        <div className='profile-pic'>
          <img src='https://plus.unsplash.com/premium_photo-1661962776165-831ab8ebe324?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </div>
        {/* profile data */}
        <div className='profile-data'>
          <h1>IT Inovators</h1>
          <div className='profile-info' style={{display:"flex"}}>
            <p>40 posts</p>
            <p>40 followers</p>
            <p>40 following</p>
          </div>
        </div>
      </div>

      <hr style={{width:"90%", opacity:"0.8" , margin:"25px auto"}}/>

      {/* gallery */}
      <div className='gallery'>
        <img src='https://plus.unsplash.com/premium_photo-1661962776165-831ab8ebe324?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        <img src='https://plus.unsplash.com/premium_photo-1661962776165-831ab8ebe324?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        <img src='https://plus.unsplash.com/premium_photo-1661962776165-831ab8ebe324?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        <img src='https://plus.unsplash.com/premium_photo-1661962776165-831ab8ebe324?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        <img src='https://plus.unsplash.com/premium_photo-1661962776165-831ab8ebe324?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        <img src='https://plus.unsplash.com/premium_photo-1661962776165-831ab8ebe324?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
      </div>
    </div>
  )
}

export default Profile
