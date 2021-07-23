import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { signIn, useSession } from "next-auth/client";
import { LockClosedIcon } from "@heroicons/react/outline";

import CustomButton from "../CustomButton/CustomButton";

const SignIn = () => {
	const [userCredentials, setUserCredentials] = useState({
		email: "",
		password: "",
	});

	const [session] = useSession();
	const router = useRouter();

	const { email, password } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!session) {
			try {
				const result = await signIn("credentials", {
					redirect: false,
					email: email,
					password: password,
				});

				console.log(result);

				if (!result.error) {
					router.replace("/");
				}
			} catch (error) {
				console.log(error);
			}
		} else {
			router.push("/");
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="mt-10 flex flex-col items-center w-3/5 mx-auto space-y-4">
			<span className="p-4 rounded-full bg-black">
				<LockClosedIcon className="h-6 w-6 text-white" />
			</span>
			<h1 className="text-xl">Sign In</h1>
			<form onSubmit={handleSubmit} className="form">
				<input
					className="input rounded-lg"
					type="email"
					placeholder="Email Address"
					required
					value={email}
					onChange={handleChange}
					name="email"
					autoComplete="email"
				/>
				<input
					className="input rounded-lg"
					type="password"
					placeholder="Password"
					required
					value={password}
					onChange={handleChange}
					name="password"
					autoComplete="password"
				/>
				<div className="flex flex-col md:flex-row flex-1 space-y-6 md:space-y-0 md:space-x-6">
					<CustomButton type="submit" styles="md:flex-1 bg-red-600 hover:bg-red-700	focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
						Sign In
					</CustomButton>
					{/* <CustomButton
						type="button"
						inverted
						styles="md:flex-1"
						onClick={() => signIn("google")}
					>
						Sign In with Google
					</CustomButton> */}
					<Link href="/auth/signup">
						<CustomButton type="submit" styles="md:flex-1">
							Create an account	
						</CustomButton>
					</Link>
				</div>
			</form>
			<div className="flex flex-col items-start md:flex-row md:justify-between w-full">
				{/* <Link href="/profile/forgot-password">
					<a className="hover:underline">Forgot password?</a>
				</Link> */}
				
					{/* <a className="hover:underline">Don't have an account? Sign Up</a> */}
				
			</div>
		</div>
	);
};

export default SignIn;
