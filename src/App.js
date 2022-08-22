import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((state) => state.cart);
  const {isOpen} = useSelector((state) => state.modal);
  useEffect(() => {
    dispatch(calculateTotals());

  },[cartItems]);
  return (
    <div className="App">
      {isOpen && <Modal/>}
      
      <Navbar/>
      <CartContainer/>
    </div>
  );
}

export default App;
