import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const CardLogout = ({ showModal, setShowModal }) => {
    const modalRef = useRef();
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/")
    }
  

    const closeModal = e => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
      };

  return (
    <>
    {showModal ? (    
    <div className='card-delete-background' onClick={closeModal} ref={modalRef} >
      <div className='card-delete'>
          <h3>Log Out</h3>
          <p>Are you sure to come out</p>
          <div className='card-delete-button'>
              <button className='sub-button green mar-but' onClick={handleClick}>yes</button>
              <button className='sub-button orange mar-but' onClick={() => setShowModal(prev => !prev)} >No</button>
          </div>
      </div>
    </div>
    ) : null}
    </>
  )
}

export default CardLogout