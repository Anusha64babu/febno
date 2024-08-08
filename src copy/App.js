import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter  as Router,Route,Routes,Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import BookList from './components/BookList';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App= () => {
  return (
    <Provider store={store}>
      <Router>
        
        <div className='container mt-4'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <h3>library Management</h3>
          <div className="collapse navbar-collapse">
               <ul className="navbar-nav mr-auto">
                 <li className="nav-item">
                  <Link className="nav-link" to="/add">Add Book</Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/">Book List</Link>
                 </li>
               </ul>
            </div>
        </nav>


       
    <Routes>
      <Route path='/' element={<BookList/>}/>
      <Route path='/add' element={<AddBook/>}/>
      <Route path='/edit/:id' element={<UpdateBook/>}/>
    </Routes>
    <ToastContainer/>
    </div>
    </Router>
    </Provider>
  );
};
export default App;




