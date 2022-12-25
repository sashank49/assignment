const Applications = () => {
	return (
		<>
			<section className="sc-eDWCr cdIfEu">
				<h1>Applications of Sorting</h1>
				<p>
					<div class="Primary_goals_card card-content-body">
						<ol>
							<li>
								<p>
									Commercial computing. Government organizations, financial
									institutions, and commercial enterprises organize much of this
									information by sorting it. Whether the information is accounts
									to be sorted by name or number, transactions to be sorted by
									time or place, mail to be sorted by postal code or address,
									files to be sorted by name or date, or whatever, processing
									such data is sure to involve a sorting algorithm somewhere
									along the way.
								</p>
							</li>
							<li>
								<p>
									Search for information. Keeping data in sorted order makes it
									possible to efficiently search through it using the classic
									binary search algorithm
								</p>
							</li>
							<li>
								<p>
									Combinatorial search. A classic paradigm in artificial
									intelligence is to define a set of configurations with
									well-defined moves from one configuration to the next and a
									priority associated with each move. Also defined is a start
									configuration and a goal configuration (which corresponds to
									having solved the problem. The A* algorithm is a
									problem-solving process where we put the start configuration
									on the priority queue, then do the following until reaching
									the goal: remove the highest-priority configuration and add to
									the queue all configurations that can be reached from that
									with one move (excluding the one just removed).
								</p>
							</li>
							<li>
								<p>
									Prim's algorithm and Dijkstra's algorithm are classical
									algorithms that process graphs. Priority queues play a
									fundamental role in organizing graph searches, enabling
									efficient algorithms.
								</p>
							</li>
						</ol>
					</div>
				</p>
			</section>
		</>
	);
};
export default Applications;
