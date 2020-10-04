import React, {CSSProperties} from 'react';
import './box.css';

export interface BoxProps {
  border? : 'single'|'double',
  style? : CSSProperties,
  hover? : CSSProperties,
  className?: string,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
}

/**
 * The main container for anything on the page
 */
export const Box: React.FC<BoxProps> = ({
  border = 'none',
  ...props
}) => {
  return (
    <div
      {...props}
      className={[props.className, `border-${border}`,'box'].join(' ')}
    >
      {props.children}
    </div>
  );
};
