import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Title } from './elements';

export const NotFound = () => (
  <Wrapper>
    <Title>Nothing available here…</Title>
    <Link to="/">Back to the startpage</Link>
  </Wrapper>
);
