import React from 'react';
import TopicsDropdown from './TopicsDropdown';
import LRUCache from './LRUCache';
import SearchInput from './SearchInput';

function App() {
  return (
    <div className="app-container">
      <h1>CacheHighlight-SmartSearch</h1>
      <TopicsDropdown />
      {/* You can use these components later or remove them if not needed */}
      {/* <SearchInput /> */}
      {/* <LRUCache /> */}
    </div>
  );
}

export default App;
