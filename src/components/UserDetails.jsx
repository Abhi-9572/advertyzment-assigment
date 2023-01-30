import React, { useEffect, useState } from 'react'

const UserDetails = ({ user, loading }) => {
    return loading ? (
        <div class="spinner-border" role="status" style={{marginTop:"300px"}}>
  <span class="visually-hidden">Loading...</span>
</div>
    ) : (
        <div className='parentCard'>
            {user.map((val, index) => {
                    return(
                        
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={val.avatar} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{val.first_name} {val.last_name}</h5>
                                <p className="card-text">{val.email}</p>
                            </div>
                        </div>
                  
                    )
                })
            }
        </div>
    )
}

export default UserDetails