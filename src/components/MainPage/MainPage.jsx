import { Header } from "../Header/Header";
import "./MainPage.css";
import mainImage from '../../assets/images/bg-cafe-sm.jpg';

export const MainPage = () => {
	return (
		<div className="mainPage">
			<img
				src={mainImage}
				alt="main"
				className="main-image"
			/>

			<div className="mainHeader">
				<Header />
			</div>
		</div>
	);
};
