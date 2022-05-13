import React, { useRef } from 'react'
import * as Components from './index'

const CardDelete = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

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
            <h3>Delete Data</h3>
            <p>Are you sure you want to delete this data?</p>
            <div className='card-delete-button'>
                <Components.Button cName='sub-button green mar-but' title='yes' />
                <button className='sub-button orange mar-but'onClick={() => setShowModal(prev => !prev)} >No</button>
            </div>
    </div>
    </div>
    ) : null}
    </>
  )
}

export default CardDelete