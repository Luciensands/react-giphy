import React from 'react';
import SearchBar from './search_bar';
import Gif from './Gif';
import GIFlist from './GIFlist';

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifId="IEh1VS5EYQt5QbODH" />
        </div>
      </div>
      <div className="right-scene">
        <GIFlist />
      </div>
    </div>
  );
};

export default App;

// class App extends Component {
//   render() {
//     return (
// <div>
//   <div className="left-scene">
//     <SearchBar />
//     <div className="selected-gif">
//       <Gif />
//     </div>
//   </div>
//   <div className="right-scene">
//   </div>
// </div>
//     );
//   }
// }
