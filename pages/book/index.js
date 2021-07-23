import { useState, useEffect } from "react";
import Head from "next/head";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import BookTable from "../../components/BookTable/BookTable";

const BookingPage= () => {
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		getSession().then((session) => {
			if (session) {
				router.replace("/");
			} else {
				setIsLoading(false);
			}
		});
	}, [router]);

	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			<Head>
				<title>Booking</title>
				<meta name="description" content="Le Restaurant - make a booking" />
			</Head>

			<BookTable />
		</>
	);
};

export default BookingPage;
