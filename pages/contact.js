import Head from "next/head";
import ContactUs from "../components/Sections/ContactUs";


const ContactPage = ({ sections }) => {
	return (
		<>
			<Head>
				<title>Get in touch!</title>
				<meta name="description" content="Le Restaurant" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<div className="py-8 space-y-6">
                {/* Spacer Div */}
			</div>
			<ContactUs />
		</>
	)
    }

export default ContactPage;