import logo from './logo.svg';
import './App.css';
import UserTable from './components/UserTable/UserTable';
import Header from './components/Header/Header';
import { Button } from 'react-bootstrap';
import AddUser from './components/AddUser/AddUser';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Route, Routes } from 'react-router-dom';


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

      <div>
        <AddUser></AddUser>
      </div>

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
            users.map(user => <UserTable user={user}></UserTable>)
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
