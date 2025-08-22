import { Header } from "../Header/Header";
import "./MainPage.css";

export const MainPage = () => {
	return (
		<div className="mainPage">
			<img
				src="/src/assets/images/bg-cafe-sm.jpg"
				alt="main"
				className="main-image"
			/>

			<div className="mainHeader">
				<Header />
			</div>
		</div>
	);
};
