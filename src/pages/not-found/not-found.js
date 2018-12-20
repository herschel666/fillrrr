import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <>
    <h1>Nothing available here…</h1>
    <Link to="/">Back to the startpage</Link>
  </>
);
