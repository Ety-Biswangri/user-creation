import Table from 'react-bootstrap/Table';

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
                <button>Delete</button>
            </td>
        </tr>
    );
}

export default UserTable;