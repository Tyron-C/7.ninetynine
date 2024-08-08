import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { makeRequest } from "../makeRequest.js";
import { removeItem } from "../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51PkqbVP7p97Ess9M7FqNf47GotCsvJPW9jlHlqSlP78IVRoVa677nOy9x41qd2VMYDynfHLZEpLjUuUxuhDookO400ILHJkXKw"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });

      console.log("Response from server:", res);

      if (res.data && res.data.stripeSession && res.data.stripeSession.id) {
        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
      } else {
        console.error("Missing stripeSession or sessionId in response");
      }
    } catch (err) {
      console.error("Error during payment handling:", err);
    }
  };

  return (
    <div className="absolute right-[20px] top-[80px] bg-white p-[20px] mt-5">
      <h1 className="mb-[30px] text-gray-500 text-[22px]">
        Productos en su cesta
      </h1>
      {products?.map((item) => (
        <div className="flex items-center gap-[20px] mb-[30px]" key={item.id}>
          <img
            className="w-[80px] h-[100px] object-cover shadow-lg"
            src={import.meta.env.VITE_UPLOAD_URL + item.image}
          />
          <div className="details">
            <h1 className="mb-[30px] text-[18px]">{item.title}</h1>
            <p className="text-gray-500 mb-[10px] text-[14px]">
              {item.description?.substring(0, 100)}
            </p>
            <div className="text-[#2879fe]">
              {" "}
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            fontSize="large"
            className="text-red-700 cursor-pointer"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="flex justify-between mb-[20px] text-lg font-bold">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button
        type="submit"
        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={handlePayment}
      >
        Proceder a la compra
      </button>
    </div>
  );
};

export default Cart;
