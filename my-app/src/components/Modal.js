import React, { useState } from 'react'

function Modal({handleAddItem, ModalOpen, handleModalOpen}) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({name, content, image});
    handleModalOpen(false);
  };
  
  return (
    <div className='background' hidden={!ModalOpen}>
      <form className='modal' onSubmit={handleSubmit}>
        <span className='close' onClick={() => handleModalOpen(false)}>
          X
        </span>
        <label htmlFor='name' className='label'>이름</label>
        <input
          id='name'
          type='text'
          placeholder='이름을 입력해주세요.'
          className='input'
          maxLength='10'
          required
          onChange={(e) => setName(e.target.value)} />
        <label htmlFor='image' className='label'>이미지</label>
        <input
          id='image'
          type='text'
          placeholder='URL을 입력해주세요.'
          className='input'
          required
          onChange={(e) => setImage(e.target.value)} />
        <label htmlFor='content' className='label'>내용</label>
        <input
          id='content'
          type='text'
          placeholder='내용을 입력해주세요.'
          className='input'
          required
          value={(e) => setContent(e.target.value)} />
        <button type='submit' className='submitButton'>저장하기</button>
      </form>
    </div>
  )
}

export default Modal