import React from 'react';

function Header({ currentPage }) {
  let headerText;
  switch (currentPage) {
    case 'About':
      headerText = 'About Me';
      break;
    case 'Resume':
      headerText = 'Resume';
      break;
    case 'Portfolio':
      headerText = 'Portfolio';
      break;
    case 'Contact':
      headerText = 'Contact';
      break;
    default:
      headerText = 'Home';
  }

  return (
    <header className="header">
      <h1>{headerText}</h1>
    </header>
  );
}

export default Header;
