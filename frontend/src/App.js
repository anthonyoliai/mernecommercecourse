import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
const App = () => {
  return (
    <Router>
      {' '}
      <Header></Header>
      <main className='py-3'>
        <Container>
          <Route path='/register' component={RegisterScreen} exact></Route>
          <Route path='/login' component={LoginScreen} exact></Route>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/profile' component={ProfileScreen}></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  )
}

export default App
