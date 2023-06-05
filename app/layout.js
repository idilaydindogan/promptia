import "@/styles/global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Promptia",
	description: "Discover & Share AI Prompts",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="main">
					<div className="primary-beige" />

					<main className="app">{children}</main>
				</div>
			</body>
		</html>
	);
}
