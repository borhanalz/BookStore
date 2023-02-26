import React,{useState} from 'react'
import AllBigNav from './Navs/BigNav'
import TinyNav from './Navs/TinyNav/TinyNav'


export default function Header() {
  return (
    <header>
          <AllBigNav />
          <TinyNav />
    </header>
  )
}
