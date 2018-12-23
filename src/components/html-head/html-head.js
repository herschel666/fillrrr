import React from 'react';
import Helmet from 'react-helmet';

import { dark } from '../../ui/_colors';
import favicon from '../../icons/favicon.ico';
import appleTouchIcon from '../../icons/apple-touch-icon.png';
import favicon32 from '../../icons/favicon-32x32.png';
import favicon16 from '../../icons/favicon-16x16.png';

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
    <link rel="icon" type="image/x-icon" href={favicon} />
    <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
  </Helmet>
);
