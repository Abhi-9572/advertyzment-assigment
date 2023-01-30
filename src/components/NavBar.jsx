import React, { useState } from 'react' 
import UserDetails from './UserDetails'

const NavBar = () => {
    const [user, setUser] = useState([])
    const[show,setShow]=useState(false)
    const [loading, setLoading] = useState(true)
    const getUserDetails=()=>
    {
        setShow(true)
        fetch('https://reqres.in/api/users?page=1')
            .then((res) => res.json())
            .then((userDetail) => {
                setUser(userDetail.data)
                setLoading(false)
               
            })
    }
  return (
    <>
    <div className='navbar'> 
        <img className='navbar-img' src="https://png.pngtree.com/element_pic/16/11/07/fb0e70abe4a687de1da4eea46928750e.jpg" alt="" width="35" height="30"></img><h2>My Company</h2>
        <button type="button" class="btn btn-primary" onClick={getUserDetails}>Get User</button>
        
    </div>
    {
        
        show && <UserDetails user={user} loading={loading}/>
        
    }
    </>
  )
}

export default NavBar