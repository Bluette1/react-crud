import React from "react";

const Header = () => {
  return (
    <header
      className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow"
      data-bs-theme="dark"
    >
      <a
        className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"
        href="#"
      >
        Company name
      </a>

      <div id="navbarSearch" className="navbar-search w-100 collapse">
        <input
          className="form-control w-100 rounded-0 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </header>
  );
};

export default Header;
