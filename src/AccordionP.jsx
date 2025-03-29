import React, { useState } from 'react';
import AccordionItem from './AccordionItemC';

const data = [
  { Summary: 'Header1',
     Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis laborum maxime atque beatae error inventore accusantium amet eligendi illum doloremque quidem natus ea, placeat, minima quaerat! Ad, eum quasi?' 
  },
  { Summary: 'Header2',
     Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis laborum maxime atque beatae error inventore accusantium amet eligendi illum doloremque quidem natus ea, placeat, minima quaerat! Ad, eum quasi?' 
    },
  { Summary: 'Header3', 
    Content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis laborum maxime atque beatae error inventore accusantium amet eligendi illum doloremque quidem natus ea, placeat, minima quaerat! Ad, eum quasi?' 
},
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          Summary={item.Summary}
          Content={item.Content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
