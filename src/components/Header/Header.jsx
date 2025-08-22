import { CoffeeList } from "../CoffeeList";
import "./Header.css";

export const Header = () => {
	return (
		<div className="header">
      <img src="/src/assets/images/vector.svg" alt="logo" className="header-hero" />
			<div className="header-text">
				<h1 className="header-title">Our Collection</h1>
				<p className="header-description">
					Introducing our Coffee Collection, a selection of unique coffees from
					different roast types and origins, expertly roasted in small batches
					and shipped fresh weekly.
				</p>
			</div>

			<div className="header-buttons">
				<button className="btn-all">All Products</button>
				<button className="btn-available">Available Now</button>
			</div>

			<div>
				<CoffeeList />
			</div>
		</div>
	);
};
