import Head from "next/head";
import { useRouter } from "next/router";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/client";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import CustomButton from "../../components/CustomButton/CustomButton";

import { wrapper } from "../../store/store";
import {} from "../../store/cartSlice";

const SuccessPage = () => {
	const router = useRouter();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const total = useSelector((state) => state.cart.totalAmount);
	const [session] = useSession();

	return (
		<>
			<Head>
				<title>Success</title>
				<meta name="description" content="Le Restaurant - Success" />
			</Head>
			<div className="py-8 space-y-6">
			</div>

			<div className="flex flex-col items-center p-10 bg-white max-w-screen-lg mx-auto">
				<div className="flex items-center space-x-2 mb-5">
					<CheckCircleIcon className="text-green-500 h-10" />
					<h1 className="text-3xl">
						Thank you, your order has been confirmed!
					</h1>
				</div>
				<p>
					Thank you for ordering with us. We'll send a confirmation email once
					your food has been sent for delivery. 
				</p>
				{/* <div className="flex flex-col w-11/12 md:max-w-6xl max-h-96 overflow-y-scroll space-y-4 shadow-lg rounded-md">
				{cartItems.map((item) => (
					<CheckoutItem key={item._id} item={item} />
				))} */}
			{/* </div> */}

			</div>
		</>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async () => {
		console.log("2. Page.getServerSideProps uses the store to dispatch things");
		await store.__persistor.purge();
	}
);

export default SuccessPage;
