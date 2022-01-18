import React from 'react';


export const ListTable = ({ groceryList, isItemSelected, removeItem, selectItem, deselectItem }) => (
  <div className="listTable">
    <table>
      <thead>
        <tr>
          <th>Items</th>
        </tr>
      </thead>
      <tbody>
      { groceryList.map(item => {
        return <tr key={item.id}>
          <td><input type="button" value="x" onClick={() => removeItem(item.id)}/></td>
          <td><input type="checkbox" onClick={() => { (isItemSelected) ? deselectItem(item) : selectItem(item)}}/></td>
          <td>{item.name}</td>
        </tr>
      })}
      </tbody>
    </table>
  </div>
);

export default ListTable
