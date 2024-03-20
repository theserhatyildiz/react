import './App.css'
import Product from './Product'

function App() {

  return (
    <div>
    <h1>Main Component</h1>

    <Product name="iphone 14" price="$2000" specs={{ram:"2gb", screen:"6.7in"}} category={"Smartphones"} />

    <Product name="Samsing Pro"price="$2000" specs={{ram:"2gb", screen:"6.7in"}} category={"Smartphones"} />


    </div>
  )
}

export default App
