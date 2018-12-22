import { createElement } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  display: inline-block;
  width: 100%;
  height: auto;
`;
const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 407.437 407.437',
};
const pathProps = {
  fill: 'currentColor',
  d:
    'M386.258 91.567l-182.54 181.945L21.179 91.567 0 112.815 203.718 315.87l203.719-203.055z',
};

export const IconChevronDown = ({ elem }) =>
  createElement(elem, svgProps, createElement('path', pathProps));

IconChevronDown.Elem = Svg;

IconChevronDown.propTypes = {
  elem: propTypes.oneOfType([propTypes.node, propTypes.object]),
};

IconChevronDown.defaultProps = {
  elem: Svg,
};
