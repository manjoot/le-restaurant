import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/client";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import CustomButton from "../CustomButton/CustomButton";

import Link from 'next/link'

const CheckoutInner = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const total = useSelector((state) => state.cart.totalAmount);
	const [session] = useSession();

	// const createCheckoutSession = async () => {

	// 	// // Call api route to create checkout session...
	// 	// const response = await fetch("/api/create-checkout-session", {
	// 	// 	method: "POST",
	// 	// 	body: JSON.stringify({
	// 	// 		items: cartItems,
	// 	// 		email: session ? session.user.email : "",
	// 	// 	}),
	// 	// 	headers: {
	// 	// 		"Content-Type": "application/json",
	// 	// 	},
	// 	// });

	// 	// const checkoutSession = await response.json();

	// 	// if (result.error) alert(result.error.message);
	// };



	return (
		<div className="flex flex-col items-center my-10 w-full space-y-4">
			<div className="flex border-b border-black pb-4 w-11/12 md:max-w-6xl">
				<span className="w-3/12 md:w-4/12 text-sm  text-left">
					Product
				</span>
				<span className="w-3/12 md:w-3/12 text-sm  text-left">
					Description
				</span>
				<span className="w-2/12 md:w-2/12 text-sm ">Quantity</span>
				<span className="w-2/12 md:w-2/12 text-sm ">Price</span>
				<span className="w-2/12 md:w-1/12 text-sm  text-right">
					Remove
				</span>
			</div>
			<div className="flex flex-col w-11/12 md:max-w-6xl max-h-96 overflow-y-scroll space-y-4 shadow-lg rounded-md">
				{cartItems.map((item) => (
					<CheckoutItem key={item._id} item={item} />
				))}
			</div>
			<div className="flex w-11/12 md:max-w-6xl justify-end">
				<h3 className="uppercase text-xl">Total: £{total}</h3>
			</div>

			<div className="flex w-11/12 md:max-w-6xl justify-end">
				<Link href="/success">
				<CustomButton styles="px-12">
					Checkout
				</CustomButton>
				</Link>
				
			</div>
		</div>
	);
};

export default CheckoutInner;
