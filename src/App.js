import React, { Component } from 'react';
import SalesRanking from './components/SalesRanking'

const productData = [
  { name: ' Product 1', url: 'http://www.example.com/p1' },
  { name: ' Product 2', url: 'http://www.example.com/p2' },
  { name: ' Product 3', url: 'http://www.example.com/p3' },
  { name: ' Product 4', url: 'http://www.example.com/p4' },
]

const users = [
  { name: 'user00' },
  { name: 'user01' },
  { name: 'user02' },
]

const regions = [
  { name: 'Korea', code: 'KO' },
  { name: 'Japen', code: 'JR' },
]

class App extends Component {
  render() {
    return (
      <div className='App'>
        <SalesRanking items={productData} users={users} regions={regions}></SalesRanking>
      </div>
    )
  }
}

export default App;
