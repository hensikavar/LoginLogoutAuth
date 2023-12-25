import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <div className='home'>
      {/* card */}
      <div className='card'>

        {/* card header */}
        <div className='card-header'>
          <div className='card-pic'>
            <img src='https://plus.unsplash.com/premium_photo-1661962776165-831ab8ebe324?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
          </div>
          <h5>Hensi</h5>
        </div>

        {/* card images */}
        <div className='card-img'>
          <img src='https://images.unsplash.com/photo-1598229497688-7b86be36d229?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </div>

        {/* card content */}
        <div className='card-content'>
          <span className="material-symbols-outlined">favorite</span>
          <p>1 like</p>
          <p>Eyes Soothing View</p>
        </div>

        {/* add comment */}
        <div className='add-comment'>
          <span className="material-symbols-outlined">mood</span>
          <input type='text' placeholder='Add a comment...'/>
          <button className='comment'>post</button>
        </div>
      </div>
    </div>
  )
}

export default Home
