import React, { useState } from 'react';

const TextToggle = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleText = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <a href="#" onClick={toggleText}>
        {isTextVisible ? 'Hide Text' : 'Show More'}
      </a>
      {isTextVisible && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Morbi non bibendum velit. Vestibulum at sem a nisi commodo
          posuere. Duis dapibus massa quis semper viverra.
        </p>
      )}
    </div>
  );
};

export default TextToggle;
