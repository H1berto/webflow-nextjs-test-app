
import { DOMNode, Element, domToReact, attributesToProps } from 'html-react-parser';

export const replaceBody = (node: DOMNode) => {
  if (node instanceof Element && node.attribs) {
    // All conditions here...
  }
};
