const TypesOfSorting = () => {
	return (
		<>
			<section className="sc-eDWCr cdIfEu">
				<h1>Sorting Algorithms</h1>
				<p>Types of Sorting Algorithms</p>
				<div class="Primary_goals_card card-content-body">
					<ol>
						<li>
							<p>
								<b> Bubble Sort</b>
								<p>
									{" "}
									It is the simplest sort method which performs sorting by
									repeatedly moving the largest element to the highest index of
									the array. It comprises of comparing each element to its
									adjacent element and replace them accordingly.
								</p>
							</p>
						</li>
						<li>
							<p>
								<b> Insertion Sort </b>
								<p>
									{" "}
									As the name suggests, insertion sort inserts each element of
									the array to its proper place. It is a very simple sort method
									which is used to arrange the deck of cards while playing
									bridge.
								</p>
							</p>
						</li>
						<li>
							<p>
								<b> Selection Sort</b>
								<p>
									{" "}
									Selection sort finds the smallest element in the array and
									place it on the first place on the list, then it finds the
									second smallest element in the array and place it on the
									second place. This process continues until all the elements
									are moved to their correct ordering. It carries running time
									O(n2) which is worst than insertion sort.
								</p>
							</p>
						</li>
						<li>
							<p>
								<b> Merge Sort</b>
								<p>
									{" "}
									Merge sort follows divide and conquer approach in which, the
									list is first divided into the sets of equal elements and then
									each half of the list is sorted by using merge sort. The
									sorted list is combined again to form an elementary sorted
									array.
								</p>
							</p>
						</li>
						<li>
							<p>
								<b> Quick Sort</b>
								<p>
									{" "}
									Quick sort is the most optimized sort algorithms which
									performs sorting in O(n log n) comparisons. Like Merge sort,
									quick sort also work by using divide and conquer approach.
								</p>
							</p>
						</li>
					</ol>
				</div>
			</section>
		</>
	);
};
export default TypesOfSorting;
