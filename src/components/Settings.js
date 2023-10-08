import React from 'react'

function Settings() {
  return (
    <div className='settings'>
      <a href="/signup"><h3>Signup</h3></a>
      <a href="/login"><h3>Login</h3></a>
      <a href="/create-opensource-project"><h3>Create Open Source Project</h3></a>
      <a href="/manage-opensource-project"><h3>Manage Projects</h3></a>
    </div>
  )
}

export default Settings