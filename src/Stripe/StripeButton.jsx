import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
 
 const stripePrice = price * 100
 const publishabledKey = 'pk_test_51IpyLrSJnYdVoPUj9su6SDnxU0vqjF1LLrX4Eh8zIsBv3ECIie93Vki9sA4im7iQtB1kUrlr9RxtzH1MgttzqmmP00UC9OlMDk'

 const onToken = token => {
  console.log("Token > ", token)
  alert("Peyment Successfull!")
 }

 return (
  <StripeCheckout
   label="Pay Now"
   name="AIO Clothes Ltd."
   billingAddress
   shippingAddress
   image="https://svgshare.com/i/CUz.svg"
   description={`Your total is $${price}`}
   amount={stripePrice}
   panelLabel="Pay Now"
   token={onToken}
   stripeKey={publishabledKey}
   
  />
 )
}

export default StripeButton