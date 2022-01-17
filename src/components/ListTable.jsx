import React from 'react';

export const ListTable = ({ groceryList }) => (
  <div className="listTable">
    <table>
      <tbody>
      {groceryList.map(item => {
        return <tr key={item.id}>
          <td>{item.name}</td>
        </tr>
      })}
      </tbody>
    </table>
  </div>
);

export default ListTable
