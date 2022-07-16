import React from 'react'
import Preloader from '../components/preloader'

export default function ProjectLayout({children}) {
  return (
    <div>
        <Preloader />
        {children}
    </div>
  )
}
