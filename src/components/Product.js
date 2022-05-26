import React, { useState } from 'react'
import './product.css'
import { Row, Col, Button, Card, InputNumber, Icon } from 'antd-v3'
import { prod } from './productList/product.js'
import { notification } from 'antd-v3';
const { Meta } = Card;


function Product({ cart, setCart }) {
  const [_, setprodObj] = useState({})


  // handling quantity
  const handleInput = (e, i) => {
    setprodObj(
      { ...prod[i], quantity: prod[i].quantity = e }
    )
  }

  // adding product to cart
  const addToCart = (prod, ind, placement, text) => {
    const pObj = prod[ind]
    if (pObj.quantity === 0) {
      // deleting product from card using grid list
      const cartCopy = [...cart]
      const filteredVal = cartCopy.filter((val, ind) => {
        return val !== pObj
      })
      setCart(filteredVal)
      return false
    } else {
      for (let i = 0; i < cart.length; i++) {
        if (prod[ind] === cart[i]) {
          setCart([...cart])
          return false
        }
      }
      setCart([...cart,
        pObj
      ])
    }

    // Notification message
    notification.info({
      message: `${prod[ind].title} has been added to your cart. ${text} `,
      description:
        '',
      icon: <Icon type="check-circle" style={{ color: 'green' }} />,
      placement,
    });
  }


  return (
    <div className='prodGrid container-fluid'>
      <Row gutter={[16, 16]}>
        {prod.map((item, ind) => {
          return (
            <Col lg={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }} key={ind}>

              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.filename} />}
                className='card1'
              >
                <div className='cardContent'>
                  <div>
                    <Meta title={item.title} description={item.description} />
                  </div>
                  <div className='itemPrice'>
                    <b>{'$' + item.price}</b>
                  </div>
                </div>
                <div className='cardFooter'>
                  <InputNumber defaultValue={item.quantity} min={0} className='inputField' onChange={(e) => { handleInput(e, ind) }} />
                  {(item.quantity > 0 || item.stock !== "Out Of Stock")
                    ? <Button onClick={() => { addToCart(prod, ind, "topLeft", 'View Cart') }} className='addCart' block>
                      Add/Update Cart
                    </Button> : <Button disabled onClick={() => { addToCart(prod, ind, "topLeft", 'View Chart') }} className='addCart' block>
                      Add/Update Cart
                    </Button>
                  }
                </div>

                {/* Product label  */}
                <div className='prodLabel'>
                  {ind === 0 ? <div className='badge1'
                    style={{ backgroundColor: 'black', marginLeft: " 150px ", paddingLeft: "5px", paddingRight: '5px' }}
                  >
                    <p>Out of stock</p>
                  </div> : (ind % 2 === 0) ? <div className='badge1'
                    style={{ backgroundColor: 'orange', marginLeft: " 205px ", paddingLeft: "5px", paddingRight: '5px' }}
                  >
                    <p>Hot</p>
                  </div> : <div className='badge1'
                    style={{ backgroundColor: 'green', marginLeft: " 198px ", paddingLeft: "5px", paddingRight: '5px' }}
                  >
                    <p>New</p>
                  </div>}
                </div>
              </Card>

            </Col>
          );
        })}

      </Row>
    </div >
  )
}

export default Product