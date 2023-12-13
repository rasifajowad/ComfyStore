import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";
import { redirect } from "react-router-dom";

export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warning("You must be logged in to view this page");
    return redirect("/Login");
  }
  return null;
};

const Checkout = () => {
  const cartTotals = useSelector((state) => state.cartState.cartTotal);
  if (cartTotals === 0) {
    return <SectionTitle text="Your Cart is Empty" />;
  }
  return (
    <>
      <SectionTitle text="Place your Order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
