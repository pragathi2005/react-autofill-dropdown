import React, { useState, useMemo } from 'react';
import { TextField, List, ListItem, Paper } from '@mui/material';
import LRUCache from './LRUCache';
import debounce from 'lodash/debounce';
import './App.css';

const suggestionsList = [
  'Apple', 'Banana', 'Orange', 'Mango', 'Grapes',
  'Pineapple', 'Papaya', 'Strawberry', 'Blueberry', 'Watermelon'
];

const cache = new LRUCache(5);

function SearchInput() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = (text) => {
    let matches = cache.get(text);
    if (!matches) {
      matches = suggestionsList.filter(item =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      cache.put(text, matches);
    }
    setSuggestions(matches);
  };

  const debouncedFetch = useMemo(
    () => debounce(fetchSuggestions, 300),
    []
  );

  const handleChange = (e) => {
    const text = e.target.value;
    setInput(text);
    if (text.trim()) {
      debouncedFetch(text);
    } else {
      setSuggestions([]);
    }
  };

  const highlight = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase()
        ? <span key={i} className="highlight">{part}</span>
        : part
    );
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <TextField
        label="Search Fruits"
        variant="outlined"
        value={input}
        onChange={handleChange}
        sx={{ width: 300 }}
      />
      {input && suggestions.length > 0 && (
        <Paper elevation={3} sx={{ marginTop: 2, maxWidth: 300, marginInline: 'auto' }}>
          <List>
            {suggestions.map((item, index) => (
              <ListItem key={index}>
                {highlight(item, input)}
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
}

export default SearchInput;
