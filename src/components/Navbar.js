import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Divider, Icon, Menu } from 'antd-v3';
import VisualModel from './VisualizeModel';

import { Badge } from 'antd-v3';
import { Popover } from 'antd-v3';
import { notification } from 'antd-v3';


function Navbar({ cart, setCart }) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  // calculating subTotal
  let subTotal = cart.map((val, ind) => {
    if (val) {
      return val.quantity * val.price
    } else {
      return [0]
    }
  })

  let total = 0
  if (subTotal.length > 0) {
    total = subTotal.reduce((a, b) => a + b)
  }

  // delete cart product
  const handleDelete = (prod, ind, placement, text) => {
    const cartCopy = [...cart]
    cartCopy.splice(ind, 1)
    setCart(cartCopy)

    notification.info({
      message: `${prod.title} has been removed from your cart. ${text} `,
      description:
        '',
      icon: <Icon type="check-circle" style={{ color: 'green' }} />,
      placement,
    });
  }

  const content = (
    <div>
      {cart.length > 0 ?
        cart.map((item, ind) => {
          return <div key={ind}>
            <div className='cartDisplay'>
              <div>
                {<img src={item.filename} alt='product Image' width='150px' height='130px' />}
              </div>
              <div>
                <div>
                  {item.title}
                </div>
                <div>
                  <b>{item.quantity} x
                    ${item.price}</b>
                </div>
              </div>
              <div
                // style={{ marginTop: '-55px' }}
                onClick={() => { handleDelete(item, ind, "topLeft", 'View Cart') }}
              ><Icon type="close" /></div>
            </div>
            <Divider />
            <div style={{ display: 'none' }}> {subTotal = item.quantity * item.price}</div>
          </div>
        }) : <div>No products in cart</div>
      }
      {cart.length > 0 && <div style={{ display: "flex", justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 'bolder', fontSize: "20px" }}>Subtotal:</div> <div><b style={{ color: "red", fontSize: "20px" }}>${total}</b></div>
      </div>}
    </div>
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className='container-fluid'>

      <div className='header'>
        <Menu
          mode="horizontal"
          style={{ lineHeight: '64px' }}
          className='nav'
        >
          <Menu.Item key="1">Shop <a href='/' /></Menu.Item><span>|</span>
          <Menu.Item key="2"
          onClick={showModal}
          >Visualize </Menu.Item>
          <Menu.Item key="3"
            className='cartIcon'
          ><Popover content={content} style={{ width: "200px" }} placement="bottom" >
              <Badge
                count={cart.length}
                showZero
              >
                <Icon type="shopping" style={{ fontSize: 30 }} />
              </Badge>
            </Popover>
          </Menu.Item>
        </Menu>

        <VisualModel isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </div>

    </div>
  )
}

export default Navbar