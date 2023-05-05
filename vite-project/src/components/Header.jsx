import React from 'react';

function Header({ currentPage }) {
  let headerTitle = '';
  if (currentPage === 'About') {
    headerTitle = 'About Me';
  } else if (currentPage === 'Resume') {
    headerTitle = 'Resume';
  } else if (currentPage === 'Blog') {
    headerTitle = 'Blog';
  } else if (currentPage === 'Contact') {
    headerTitle = 'Contact';
  }

  return (
    <header className="header">
      <h1>{headerTitle}</h1>
    </header>
  );
}

export default Header;
