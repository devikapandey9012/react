import React from 'react';

const AccordionItem = ({ Summary, Content, isOpen, onClick }) => {
  return (
    <div>
      <div onClick={onClick}>
        {Summary}
      </div>
      {isOpen && <p>{Content}</p>}
    </div>
  );
};

export default AccordionItem;
