import React from 'react';
import Gif from './Gif';

const GIFlist = () => {
  const gifIds =
  return (
    <div className="gif-list">
      {gifIds.map((gifId) => <Gif gifId)}
    </div>
  );
};

export default GIFlist;
