import React from 'react';

const ListSelection = ({ selectedItem }) => (
  <div className="listSelection">
    <p><b>Item Selected</b></p>
    <ul>
      <li>{selectedItem.name}</li>
    </ul>
  </div>
);

export default ListSelection;
