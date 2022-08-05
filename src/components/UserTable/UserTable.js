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
            <td>
                <p><span><a target={`_blank`} href={`https://${website}`}>{website}</a></span> </p>
            </td >
            <td>
                <DeleteModal></DeleteModal>
            </td>
        </tr >
    );
}

export default UserTable;