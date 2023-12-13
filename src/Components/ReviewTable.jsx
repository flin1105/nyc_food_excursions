import stores from "../data";
import RestaurantReview from "./RestaurantReview";
import "./ReviewTable.css";

const ReviewTable = () => {
	return (
		<table className="review-table">
			<thead>Complete Review List</thead>
			<tr className="table-subheader">
				<th>Name</th>
				<th>Cuisine</th>
				<th>Reviewer</th>
				<th>Review Date</th>
				<th>Foods Reviewed</th>
				<th>Link</th>
			</tr>
			<tbody>
				{stores.map((store) => (
					<RestaurantReview
						key={store.reviewId}
						store={store}
					/>
				))}
			</tbody>
		</table>
	);
};

export default ReviewTable;
