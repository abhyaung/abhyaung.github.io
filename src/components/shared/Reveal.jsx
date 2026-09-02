import React from 'react';

/**
 * Plain wrapper. Content is visible at rest; nothing waits on a scroll observer.
 * Kept so section markup does not need to change if entrance motion is ever wanted again.
 */
const Reveal = ({ children, className, as: Tag = 'div', delay, ...rest }) => (
  <Tag className={className} {...rest}>{children}</Tag>
);

export default Reveal;
