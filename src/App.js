import './App.css';
import Cart from './Cart';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { useState, useEffect } from 'react';
import db, {auth} from './firebase';
import Login from './Login';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [cartItem, setCartItem] = useState([]);

  const signOut = ()=>{
    auth.signOut().then(()=>{
        localStorage.removeItem("user")
        setUser(null)
    })
}

  const getCartItems = ()=>{
    db.collection('cartItems').onSnapshot(snapshot =>{
      const tempItems = snapshot.docs.map(doc =>({
        id: doc.id,
        products: doc.data()
      }))
      setCartItem(tempItems)
    })
  }

  useEffect(() => {
    getCartItems();
  }, [])

  return (
    <Router>
    { !user ? (
        <Login setUser={setUser}/>
    ):(
      <div className="App">
        <Header user={user} cartItem={cartItem} signOut={signOut}/>
        <Switch>

            {/* <Route path="/login">
                <Login setUser={setUser} />
            </Route> */}

            <Route path="/cart">
                <Cart cartItem={cartItem} />
            </Route>

            <Route path="/">
                <Home/>
            </Route>

        </Switch>
      </div>
    )}
      
    </Router>
  );
}

export default App;
