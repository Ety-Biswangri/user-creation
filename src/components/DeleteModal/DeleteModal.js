import React from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
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

function DeleteModal() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const userDeleted = () => {
        toast(" User deleted successfully");
    }

    return (
        <div>
            <Button onClick={openModal} variant="danger" size='sm'>Delete</Button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div>
                    <h4>Do you want to delete this user?</h4>
                </div>
                <div className='mt-4'>
                    <Button variant="danger" onClick={userDeleted}>Yes</Button>
                    <Button onClick={closeModal} variant="warning" className='ms-4'>No</Button>
                </div>
            </Modal>
        </div>
    );
}

export default DeleteModal;