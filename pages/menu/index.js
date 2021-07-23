import Head from "next/head";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";

import { connectToDatabase } from "../../lib/db/mongodb";

const MenuPage = ({ collections }) => {
	return (
		<>
			<Head>
				<title>Menu</title>
				<meta name="description" content="Le Restaurant Menu" />
			</Head>

			<CollectionsOverview collections={collections} />
		</>
	);
};

export const getStaticProps = async () => {
	const { db } = await connectToDatabase();

	const starter = await db
		.collection("items")
		.find({ category: "starter" })
		.limit(5)
		.toArray();
	const main = await db
		.collection("items")
		.find({ category: "main" })
		.limit(5)
		.toArray();
	const sides = await db
		.collection("items")
		.find({ category: "sides" })
		.limit(5)
		.toArray();
	const drinks = await db
		.collection("items")
		.find({ category: "drinks" })
		.limit(5)
		.toArray();

	const collections = {
		starter: JSON.parse(JSON.stringify(starter)),
		main: JSON.parse(JSON.stringify(main)),
		sides: JSON.parse(JSON.stringify(sides)),
		drinks: JSON.parse(JSON.stringify(drinks)),

	};

	return {
		props: {
			collections,
		},
	};
};

export default MenuPage;
