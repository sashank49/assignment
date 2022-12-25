import img from "../../assets/images/sortexample.png";

const Introduction = () => {
	return (
		<>
			<section className="sc-eDWCr cdIfEu">
				<h1>What is Sorting?</h1>
				<p>
					Sorting refers to ordering data in an increasing or decreasing fashion
					according to some linear relationship among the data items. Sorting
					can be done on names, numbers and records. Sorting reduces the For
					example, it is relatively easy to look up the phone number of a friend
					from a telephone dictionary because the names in the phone book have
					been sorted into alphabetical order. This example clearly illustrates
					one of the main reasons that sorting large quantities of information
					is desirable. That is, sorting greatly improves the efficiency of
					searching. If we were to open a phone book, and find that the names
					were not presented in any logical order, it would take an incredibly
					long time to look up someone’s phone number.
				</p>
				<img src={img}></img>
			</section>
		</>
	);
};
export default Introduction;
