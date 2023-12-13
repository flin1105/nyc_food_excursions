const RestaurantReview = ({ store }) => {
	return (
		<tr>
			<td>{store.name}</td>
			<td>{store.cuisine}</td>
			<td>{store.reviewer}</td>
			<td>{store.datePublished}</td>
			<td>
				<ul>
					{store.foods.map((food, index) => (
						<li key={index}>{food}</li>
					))}
				</ul>
			</td>
			<td>
				<a
					href={store.link}
					target="_blank"
					rel="noreferrer"
				>
					{store.linkTitle}
				</a>
			</td>
		</tr>
	);
};

export default RestaurantReview;
