import React from 'react';

const Gif = () => {
  const { gifId } = props;
  const src = `https://media4.giphy.com/media/${gifId}/giphy.gif`;
  return (
    <div>
      <img src={src} className="gif" />
    </div>
  );
};

export default Gif;

// import React, { Component } from 'react';
// class Gif extends Component {
//   render() {
//     const src = "https://media4.giphy.com/media/TIEh1VS5EYQt5QbODH/giphy.gif"
//     return (
//       <img src={src} className="gif" />
//     );
//   }
// }
