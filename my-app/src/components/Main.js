import React, { useState } from 'react'
import Modal from './Modal'
import dog from  "../image/다울1.jpg";
import dog2 from "../image/다울2.jpg";
import dog3 from "../image/다울3.jpg";
import dog4 from "../image/다울4.jpg";
import dog5 from "../image/다울5.jpg";
import dog6 from "../image/다울6.jpg";

function Main() {
  const initData = [
    {name: "그림 다울1",
    content:"과자를 코에 올리고 있어요!!",
    image:dog},
    {name: "눕 다울",
    content: "패드위에 누워 있어용!",
    image: dog2},
    {name:"그림 다울2",
    content: "멀뚱히 앉아 있어요!",
    image: dog3},
    {name: "동글 다울",
    content: "동글게 자고 있어요!",
    image: dog4},
    {name: "기달려",
    content: "공을 기달리고 있어요!",
    image: dog5},
    {name: "터그 놀이",
    content: "터그 놀이를 하고 있어요",
    image: dog6},
  ];
  const [data, setSData] = useState(initData);
  const [ModalOpen, setModalOpen] = useState(false);

  let handleAddItem = (item) => {
    setSData([...data, item]);
  };

  let handleModalOpen = (value) => {
    setModalOpen(value);
  };
  return (
    <>
    <header>
      <span className='title'>다울🐶</span>
    </header>
    <main>
      <div className='side'>
        <button type='button' className='add' onClick={ () => setModalOpen(true)}>추가</button>
        {data.map((item) => (<span key={item.name}>{item.name}</span>))}
      </div>
      <section className='container'>
        {data.map((item) => ( <div className='card' key={item.name}>
          <img src={item.image} alt= {item.name} />
          <span>{item.content}</span>
        </div>))}
      </section>
      <Modal handleAddItem={handleAddItem} ModalOpen={ModalOpen} handleModalOpen={handleModalOpen} />
    </main>
    </>
  )
}

export default Main