import logo from './logo.svg';
import './App.css';
import UserTable from './components/UserTable/UserTable';
import Header from './components/Header/Header';
import { Button } from 'react-bootstrap';
import AddUser from './components/AddUser/AddUser';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [users, setUsers] = useState([]);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [isReload]);

  return (
    <div>
      <Header></Header>

      <div className='container'>
        <AddUser isReload={isReload} setIsReload={setIsReload}></AddUser>
      </div>

      <div className='container'>
        <Table responsive>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => <UserTable key={user.id} user={user}></UserTable>)
            }
          </tbody>
        </Table>
      </div>

      <ToastContainer />

    </div>
  );
}

export default App;
