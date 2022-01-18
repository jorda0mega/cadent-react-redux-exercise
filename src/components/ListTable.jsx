import React from 'react';


export const ListTable = ({ groceryList, removeItem }) => (
  <div className="listTable">
    <table>
      <tbody>
      { groceryList.map(item => {
        return <tr key={item.id}>
          <td><input type="button" value="x" onClick={() => removeItem(item.id)}/></td>
          <td><input type="checkbox"/></td>
          <td>{item.name}</td>
        </tr>
      })}
      </tbody>
    </table>
  </div>
);

export default ListTable
