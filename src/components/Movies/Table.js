import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({columns, onSortColumn, onSort, tableMovies}) => {

 return (
      <table className="table">
          <TableHeader 
            columns={columns} 
            sortColumn={onSortColumn} 
            onSort={onSort}
          />
          <TableBody 
            columns={columns} 
            data={tableMovies}
          />
    </table>
 );
}

export default Table; 