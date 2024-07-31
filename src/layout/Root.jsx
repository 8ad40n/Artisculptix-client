import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Root() {
  return (
    <div className='container mx-auto px-10'>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}
