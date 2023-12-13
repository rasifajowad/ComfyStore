import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  //temp
  const user = null;
  const numItmesInCart = useSelector((state) => state.cartState.numItmesInCart);
  if (numItmesInCart === 0) {
    return <SectionTitle text="Your Cart Is Empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/Checkout" className="btn btn-primary btn-block mt-8">
              Please Login
            </Link>
          ) : (
            <Link to="/Checkout" className="btn btn-primary btn-block mt-8">
              Proceed to Checkout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
