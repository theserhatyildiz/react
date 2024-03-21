import { useState } from 'react'
import './App.css'
// import Product from './Product'
// import User from './User'
import Country from './Country'

function App() {

  let [isLoggedIn,setIsLoggedIn] = useState(false)

  let [countries,setCountries] = useState(
    [
      {name:"China", capital: "Beijing", pop:"1.4B"},
      {name:"India", capital: "New Delhi" , pop:"1.38B"},
      {name:"USA", capital: "Washingot DC", pop:"329M"}
    ]
    ) 

    function loadNewCountries ()
    {
      setCountries(
        [
          {name:"Turkiye", capital: "Ankara", pop:"80M"},
          {name:"Switzerland", capital: "Basel" , pop:"8.7M"},
          {name:"Netharlands", capital: "Amsterdam", pop:"17.53M"}
        ]
        )
    }

  return (
    <div>
    <h1>Main Component</h1>

    {
      isLoggedIn==false? 
      (<h1>Please Log In</h1>)
      :      countries.map((country) =>{

        return (
          <Country name={country.name} capital={country.capital} pop={country.pop}/>
        )

      })
    }

    <button onClick={loadNewCountries}>Load New Countries</button>

    {/* <Product name="iphone 14" price="$2000" specs={{ram:"2gb", screen:"6.7in"}} category={"Smartphones"} />

    <Product name="Samsing Pro"price="$2000" specs={{ram:"2gb", screen:"6.7in"}} category={"Smartphones"} /> */}

    {/* <User/> */}

    {/* {
      countries.map((country) =>{

        return (
          <Country name={country.name} capital={country.capital} pop={country.pop}/>
        )

      })
    } */}

    </div>
  )
}

export default App
