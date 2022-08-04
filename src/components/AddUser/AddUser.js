import React from 'react';
import { useForm } from 'react-hook-form';

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

function AddUser() {
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

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div style={{ width: "500px" }}>
            <button onClick={openModal}>Add User</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h4 className='mb-4 text-center'>User Information</h4>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='' {...register("name", { required: true, maxLength: 20 })} />
                    <br />
                    <input {...register("username", { required: true, maxLength: 20 })} />
                    <br />
                    <input {...register("email", { pattern: /^[A-Za-z]+$/i })} />
                    <br />
                    <input type="number" {...register("phone", { min: 18, max: 99 })} />
                    <br />
                    <input {...register("website", { required: true, maxLength: 20 })} />
                    <br />
                    <input type="submit" />
                </form>

                <button onClick={closeModal} className="mt-3">close</button>
            </Modal>
        </div>
    );
}

export default AddUser;