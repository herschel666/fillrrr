import React from 'react';
import Helmet from 'react-helmet';

import { dark } from '../../ui/_colors';

export const HtmlHead = () => (
  <Helmet>
    <title>Fillrrr</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, nofollow, noarchive" />
    <meta name="theme-color" content={dark} />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    />
  </Helmet>
);
