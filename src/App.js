import './App.css';
import 'antd-v3/dist/antd-v3.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import VisualModel from './components/VisualizeModel';
import { Layout } from 'antd-v3';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])

  return (
    <Layout className='mainLayout'>
        <Navbar cart={cart} setCart={setCart}/>
        <Product setCart={setCart} cart={cart}/>
        <VisualModel/>
    </Layout>
  );
}

export default App;
