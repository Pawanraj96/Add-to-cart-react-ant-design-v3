import React from 'react'
import { Table } from 'antd-v3';
import { prod } from './productList/product';

function TableComp() {
    const columns = [
        {
          key:1,
          title: 'Product',
          dataIndex: 'name',
        },
        {
          key:2,
          title: 'Price in $',
          dataIndex: 'price',
        }
      ];

      const data = prod
      
  return (
    <div >
        <Table columns={columns} dataSource={data} size="small"  />
    </div>
  )
}

export default TableComp