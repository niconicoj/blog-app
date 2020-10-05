import React from 'react';
import './top-bar.css';
import {Box} from './Box';

/**
 * The main container for anything on the page
 */
export const TopBar: React.FC = () => {
  return (
    <div
      className={["top-bar"].join(' ')}
    >
      <div
        className={["top-bar-container"].join(' ')}
      >
        <Box
          border="double"
          className={["top-bar-el"].join(' ')}
        >
          NICONICO.IO
        </Box>
        <div>
          <Box
            border="single"
            className={["top-bar-el"].join(' ')}
          >
            home
          </Box>
          <Box
            border="single"
            className={["top-bar-el"].join(' ')}
          >
            about
          </Box>
        </div>
      </div>
    </div>
  );
};
