import "./CoffeeCard.css";
import cn from "classnames";
import fullStar from '../../assets/images/Star_fill.svg';
import emptyStar from '../../assets/images/Star.svg';

export const CoffeeCard = ({ coffee }) => {
	return (
		<>
			<div className="card">
				<li>
					<div className="card-hero">
						<img
							src={coffee.image}
							alt={coffee.name}
							className="card-main_img"
						/>
						<span
							className={cn({ popular: coffee.popular, none: !coffee.popular })}
						>
							Popular
						</span>
					</div>

					<div className="card-info">
						<p className="card-name">{coffee.name}</p>
						<p className="card-price">{coffee.price}</p>
					</div>

					<div className="rating-container">
						{coffee.rating ? (
							<div className="card-rating">
								<img
									className="card-star_full"
									src={fullStar}
									alt="star"
								/>
								<p className="card-rate">{(+coffee.rating).toFixed(2)}</p>
								<p className="card-vote">({`${coffee.votes} votes`})</p>
							</div>
						) : (
							<div className="card-rating">
								<img
									className="card-star_empty"
									src={emptyStar}
									alt="empty-star"
								/>
								<p className="no-rate">No ratings</p>
							</div>
						)}
						{!coffee.available && <div className="sold-out">Sold out</div>}
					</div>
				</li>
			</div>
		</>
	);
};
