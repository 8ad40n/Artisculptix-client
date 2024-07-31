import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Update() {
    const craft = useLoaderData();
    
  return (
    <div>Update</div>
  )
}
