import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from '../../components/wrapper/';
import { Title } from './elements';

export const NotFound = () => (
  <Wrapper>
    <Title>Nothing available here&hellip;</Title>
    <Link to="/">Back to the startpage</Link>
  </Wrapper>
);
