import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const NoMatchPage = () => (
  <div className="error-page">
    <h1 className="mb-4">404 - Not found</h1>
    <Link to="/">
      <h3 className="mt-4">Go to home</h3>
    </Link>
  </div>
);

export default NoMatchPage;
