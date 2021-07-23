import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/client";

const NavList = ({ styles }) => {
	const [session, isLoading] = useSession();
	const router = useRouter();

	const handleSignOut = async (event) => {
		event.preventDefault();

		const data = await signOut({ redirect: false, callbackUrl: "/auth" });

		if (data) {
			router.push("/auth/signin");
		}
	};
	return (
		<ul
			className={`${styles} mt-10 md:mt-0 md:flex-row md:space-x-6 items-center w-full md:w-96`}
		>
			<li className="p-2 w-full md:flex md:justify-center hover:bg-gray-300 hover:bg-opacity-60 transition-colors duration-300 cursor-pointer">
				<Link href="/menu">
					<a className="nav-link">Menu</a>
				</Link>
			</li>
			<li className="p-2 w-full md:flex md:justify-center hover:bg-gray-300 hover:bg-opacity-60 transition-colors duration-300 cursor-pointer">
				<Link href="/book">
					<a className="nav-link">Book</a>
				</Link>
			</li>
			<li className="p-2 w-full md:flex md:justify-center hover:bg-gray-300 hover:bg-opacity-60 transition-colors duration-300 cursor-pointer">
				<Link href="/contact">
					<a className="nav-link">Contact</a>
				</Link>
			</li>
			{/* <li className="p-2 w-full md:flex md:justify-center hover:bg-gray-300 hover:bg-opacity-60 transition-colors duration-300 cursor-pointer"> */}
			<li className="p-2 w-full md:flex md:justify-center bg-red-600	 hover:bg-red-700	 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
				{session && !isLoading ? (
					<a className="nav-link cursor-pointer" onClick={handleSignOut}>
						Sign Out
					</a>
				) : (
					<Link href="/auth/signin">
						<a className="nav-link">Login</a>
					</Link>
				)}
			</li>
		</ul>
	);
};

export default NavList;
