import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LockClosedIcon } from "@heroicons/react/outline";
import CustomButton from "../CustomButton/CustomButton";

const BookTable = () => {
	const [bookingCredentials, setBookingCredentials] = useState({
		bookingName: "",
		date: "",
		time: "",
	});
	const router = useRouter();

	const { bookingName, date, time } = bookingCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/auth/signup", {
				method: "POST",
				body: JSON.stringify({
					bookingName: bookingName,
					date: date,
					time: time,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const json = await response.json();

			if (!response.ok) throw new Error(json.message || "Something went wrong");

			console.log(json.message);

			setBookingCredentials({
				bookingName: "",
		        date: "",
		        time: "",
			});

			router.replace("/");
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setUserCredentials({
			...userCredentials,
			[name]: value,
		});
	};

	return (
		<div className="mt-10 flex flex-col items-center w-3/5 mx-auto space-y-4">
			<span className="p-4 rounded-full">
				{/* <LockClosedIcon className="h-6 w-6 text-white" /> */}
                <img src="https://i.ibb.co/G9HBzxV/restaurant.png"className="h-18 w-24" ></img>
			</span>
			<h1 className="text-xl">Make a booking</h1>
			<form className="form" onSubmit={handleSubmit}>
				<div className="w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
					<input
						className="input flex-1 rounded-lg"
						type="text"
						placeholder="booking name"
						value={bookingName}
						name="bookingName"
						onChange={handleChange}
						required
						autoFocus
					/>
					<input
						className="input flex-1 rounded-lg"
						type="date"
						placeholder="Date"
						value={date}
						name="date"
						onChange={handleChange}
						required
					/>
				</div>
				<input
					className="input rounded-lg"
					type="time"
					placeholder="time"
					value={time}
					name="time"
					onChange={handleChange}
					required
				/>
				<Link href="/book/confirmed">
				<CustomButton className="rounded-lg">Book table</CustomButton>
				</Link>
			</form>
			
		</div>
	);
};

export default BookTable;
