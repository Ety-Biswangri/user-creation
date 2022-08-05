import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import DeleteModal from '../DeleteModal/DeleteModal';

function UserTable({ user }) {

    const { id, name, username, email, phone, website } = user;

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
            <td>
                <DeleteModal></DeleteModal>
            </td>
        </tr>
    );
}

export default UserTable;