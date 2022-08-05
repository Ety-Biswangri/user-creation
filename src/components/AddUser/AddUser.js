import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function AddUser({ users, isReload, setIsReload }) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSave = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const username = event.target.username.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const website = event.target.url.value;

        fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, username, email, phone, website })
        })
            .then(res => res.json())
            .then(data => setIsReload(!isReload));
    }

    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);

    return (
        <div>
            <Button onClick={openModal} variant="primary" className='mt-5 mb-5'>Add User</Button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h4 className='mb-4 text-center'>User Information</h4>

                <Form onSubmit={handleSave}>
                    <Form.Group className="mb-2" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control size='sm' type="text" name='name' placeholder="Enter name" required />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control size='sm' type="text" name='username' placeholder="Enter username" required />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control size='sm' type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control size='sm' type="number" name='phone' placeholder="Enter phone number" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicWebsite">
                        <Form.Label>Website</Form.Label>
                        <Form.Control size='sm' type="url" name='website' placeholder="Enter website" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">Save</Button>

                    <Button onClick={closeModal} variant="warning" className='ms-4'>Close</Button>
                </Form>
            </Modal>
        </div>
    );
}

export default AddUser;