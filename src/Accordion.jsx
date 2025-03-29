import React, { useState } from 'react';

const data = [
  { Summary: 'Header1', 
    Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique in voluptates sit inventore vel cumque recusandae? Maiores sequi rerum et, modi fugiat magnam, corporis porro esse delectus voluptas temporibus!'
 },
  { Summary: 'Header2', 
    Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique in voluptates sit inventore vel cumque recusandae? Maiores sequi rerum et, modi fugiat magnam, corporis porro esse delectus voluptas temporibus!' 
},
  { Summary: 'Header3',
     Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique in voluptates sit inventore vel cumque recusandae? Maiores sequi rerum et, modi fugiat magnam, corporis porro esse delectus voluptas temporibus!' 
    },
];

const SimpleAccordion = () => {
  const [openIndexes, setOpenIndexes] = useState([null]); 

  const handleClick = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) 
      ? prev.filter((i) => i !== index) 
      : [...prev, index]
    );
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div onClick={() => handleClick(index)}>
            {item.Summary}
          </div>
          {openIndexes.includes(index) && <p>{item.Content}</p>}
        </div>
      ))}
    </div>
  );
};

export default SimpleAccordion;

