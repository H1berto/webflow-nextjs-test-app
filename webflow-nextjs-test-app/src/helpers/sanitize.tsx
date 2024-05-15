import xss from 'xss';

const WHITELIST_ATTR = ['class'];

const whiteList = {
  div: [...WHITELIST_ATTR],
  span: [...WHITELIST_ATTR],
  section: [...WHITELIST_ATTR],
  strong: [...WHITELIST_ATTR],
  nav: [...WHITELIST_ATTR],
  p: [...WHITELIST_ATTR],
  h1: [...WHITELIST_ATTR],
  h2: [...WHITELIST_ATTR],
  h3: [...WHITELIST_ATTR],
  h4: [...WHITELIST_ATTR],
  h5: [...WHITELIST_ATTR],
  h6: [...WHITELIST_ATTR],
  br: [...WHITELIST_ATTR],
  img: [...WHITELIST_ATTR, 'src', 'width', 'height', 'alt'],
  a: [...WHITELIST_ATTR, 'href', 'target', 'rel', 'data-button-value'],
  button: [...WHITELIST_ATTR, 'data-button-value'],
  link: ['rel', 'href']
};

const options = {
  whiteList,
  css: false,
  stripIgnoreTagBody: ['script']
};

export const sanitize = (html: string) => xss(html, options);