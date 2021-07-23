import Head from "next/head";

import Directory from "../components/Directory/Directory";
import Hero from "../components/Sections/Hero";

import { connectToDatabase } from "../lib/db/mongodb";

const HomePage = ({ sections }) => {
	return (
		<>
			<Head>
				<title>Welcome to Le Restaurant</title>
				<meta name="description" content="Le Restaurant" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<div className="py-8 space-y-6">
				<Directory sections={sections} />
			</div>
			<Hero />
		</>
	);
};

export const getStaticProps = async () => {
	const { db } = await connectToDatabase();

	const sections = await db.collection("sections").find({}).toArray();

	const data = JSON.parse(JSON.stringify(sections));

	return {
		props: {
			sections: data,
		},
	};
};

export default HomePage;
