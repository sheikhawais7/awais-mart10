import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../../context/AuthContext'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { message } from 'antd';
const initialState = { fullName: "", email: "", address: "" }

export default function Cart() {

  const { cart, setCart, removeFromCart } = useAuthContext();
  const [sum, setSum] = useState(0)
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const totalSum = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
    setSum(totalSum);
    console.log(cart)
  }, [cart])

  // ---------------HANDLE PLUS------------------------------------------------------------------------

  const handlePlus = (product) => {
    const updatedProduct = cart.find((item) => {
      return item.title === product.title
    }
    );
    updatedProduct.quantity ? updatedProduct.quantity += 1 : updatedProduct.quantity = 2
    const newArr = cart.filter((item) => {
      return item.title != product.title
    })
    newArr.push(updatedProduct)
    setCart(newArr)
  }

  // ---------------HANDLE MINUS-----------------------------------------------------------------------

  const handleMinus = (product) => {
    const updatedProduct = cart.find((item) => {
      return item.title === product.title
    }
    );
    if (updatedProduct.quantity >= 1) {
      updatedProduct.quantity ? updatedProduct.quantity -= 1 : updatedProduct.quantity = 2
      const newArr = cart.filter((item) => {
        return item.title != product.title
      })
      newArr.push(updatedProduct)
      setCart(newArr)
    }
  }

  // ---------------HANDLE REMOVE----------------------------------------------------------------------

  const handleRemove = (index) => {
    removeFromCart(index)
  }


  // -------------- Styling -------------------

  const tableStyle = {
    "width": "90%",
    "margin": "auto"
  }

  const borderStyle = {
    "border": "1px solid #b7b7b7",
    "padding": "15px 0px",
    "height": "173.92px",
    "alignItems": "center"
  }

  const btnStyle = {
    "display": "flex",
    "justifyContent": "space-evenly"
  }


  const rowStyle = {
    "textAlign": "center"
  }

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  
  const doneOrder = (e) => {
    e.preventDefault();
    let { fullName, email, address } = state
    fullName = fullName.trim()
    email = email.trim()
    address = address.trim()
    if(!fullName){
      message.error("Please Enter Your Name")
      return
    }
    console.log(fullName)
    if(!email){
      message.error("Please Enter Your Email")
      return
    }
    if(!address){
      message.error("Please Enter Your Address")
      return
    }
    message.success("Order Done Successfully")
    setCart([]);
  }

  return (
    <>
      <div className="backImg">
        <div className="animation">
          <h1>Order Now</h1>
        </div>
      </div>

      {
        cart.length == 0
          ?
          <h1 className='fw-bolder my-5 text-center'>"No Products Found"</h1>
          :
          <>
            <Table style={tableStyle} className='my-5'>
              <Thead>
                <Tr style={rowStyle}>
                  <Th style={borderStyle}>Product #</Th>
                  <Th style={borderStyle}>Title</Th>
                  <Th style={borderStyle}>Price</Th>
                  <Th style={borderStyle}>Quantity</Th>
                  <Th style={borderStyle}>Remove</Th>
                </Tr>
              </Thead>
              <Tbody>
                {cart.map((product, index) => {
                  return (
                    <>
                      <Tr style={rowStyle}>
                        <Td style={borderStyle}>{index + 1}</Td>
                        <Td style={borderStyle}>{product.brand}</Td>
                        <Td style={borderStyle}>{product.price}</Td>
                        <Td style={borderStyle}>
                          <div className="d-flex justify-content-evenly flex-column align-items-center">
                            <button className="plus__icon" onClick={() => { handlePlus(product) }}>
                            </button>
                            {product.quantity ? product.quantity : 1}
                            <button className="minus__icon" onClick={() => { handleMinus(product) }}>
                            </button>
                          </div>
                        </Td>
                        <Td style={borderStyle} className='d-flex justify-content-evenly flex-column align-items-center'>
                          <button className="button" onClick={() => { handleRemove(index) }}>
                            <svg viewBox="0 0 448 512" className="svgIcon">
                              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg>
                          </button>
                        </Td>
                      </Tr>
                    </>
                  )
                })}
              </Tbody>
            </Table>
            <div className="container py-5">
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <div id='cartCard' className="card p-5" style={{ minHeight: "565px" }}>
                    <form className='form'>
                      <h1 className='mt-5 text-center'>Buyer Detail</h1>
                      <label className='mb-1' htmlFor="name">Name</label>
                      <input type="text" id='fullName' name="fullName"  className='w-100' onChange={handleChange} placeholder='Full Name'/>
                      <label className='mb-1 mt-3' htmlFor="email">Email</label>
                      <input type="email" id='email' name="email" className='w-100' onChange={handleChange} placeholder='you@example.com'/>
                      <label className='mt-3 mb-1' htmlFor="msg">Address</label>
                      <textarea name="address" id='address' onChange={handleChange} className='w-100 mt-1' rows={4} placeholder='   Your Address / Location '/>
                      {/* Cart Details */}
                      {
                        cart.length == 0
                          ?
                          <></>
                          :
                          <>
                            <h1 className='mt-3'>Total Price :- ${sum.toFixed(2)}</h1>
                          </>
                      }
                      <div className="text-center">
                        <button className="mt-4 border-0 rounded-5 py-2 px-3" onClick={doneOrder} style={{ backgroundColor: "#fca311" }}>Done Order</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
      }
    </>
  )
}
