import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';

class MyTable extends React.Component {
  render() {
    return (
      <div className="container">
        <Table
          rowsCount={8}
          rowHeight={90}
          width={800}
          height={300}
          headerHeight={0}
          touchScrollEnabled={true}>
            <Column
              fixed={true}
              cell={<Cell>header1</Cell>}
              width={100}/>
            <Column
              fixed={true}
              cell={<Cell>header2</Cell>}
              width={100}/>
            <Column
              cell={<Cell>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Cell>}
              width={300}/>
            <Column
              cell={<Cell>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Cell>}
              width={300}/>
            <Column
              cell={<Cell>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Cell>}
              width={300}/>
            <Column
              cell={<Cell>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Cell>}
              width={300}/>
        </Table>
      </div>
    );
  }
}

export default MyTable
