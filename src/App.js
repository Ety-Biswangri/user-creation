import logo from './logo.svg';
import './App.css';
import UserTable from './components/UserTable/UserTable';
import Header from './components/Header/Header';
import { Button } from 'react-bootstrap';
import AddUser from './components/AddUser/AddUser';



function App() {
  return (
    <div>
      <Header></Header>

      <div>
        <AddUser></AddUser>
      </div>

      <UserTable></UserTable>
    </div>
  );
}

export default App;
