import { Open_Sans } from "next/font/google";
import "./globals.scss";

import SideBar from "@/components/sidebar";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "useFuls ( )",
	description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className={font.className}>
				<SideBar />
				<main>
					{children}
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
