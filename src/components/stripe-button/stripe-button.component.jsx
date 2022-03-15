import StripeCheckout from "react-stripe-checkout"

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publisableKey = "pk_test_56cuLPT82wkGa5TWk66an79N00SzKcV51T"

  const onToken = token => {
    console.log(token)
    alert("Successful")
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Shop-ReactJS"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`You total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisableKey}
    />
  )
}

export default StripeButton
