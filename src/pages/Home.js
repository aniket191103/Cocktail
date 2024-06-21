import React from 'react'
import CocktailList from '../components/CocktailList'
import Navbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'

export default function Home() {
  return (
    <main>
      <Navbar
      Home="Home"
      About="About"
      SearchForm={<SearchForm/>}/>
      <CocktailList />
    </main>
  )
}
