import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container mt-6'>
        <ul className='flex gap-16 justify-center'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add">Add</NavLink>
            <NavLink to="/update">Update</NavLink>
        </ul>
    </div>
  )
}
