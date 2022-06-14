import React from 'react';

function Header() {
  return (
    <header className="jumbotron bg-info ">
      <div className="container text-light p-3 mb-5 bg-info rounded ">
        <h1 className="display-3 ">Flashcard-o-matic!</h1>
        <p className="fst-italic">
          Discover The Flashcard Difference.
        </p>
      </div>
    </header>
  );
}

export default Header;