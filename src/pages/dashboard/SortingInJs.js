import { useState } from "react";

const SortingInJs = () => {
	const [click, setclick] = useState(false);
	const change123 = () => {
		setclick(true);
	};
	return (
		<>
			<section className="sc-eDWCr cdIfEu">
				<h1>Introduction to JavaScript Array sort() method</h1>
				<p>
					The sort() method allows you to sort elements of an array in place.
					Besides returning the sorted array, the sort() method changes the
					positions of the elements in the original array.
				</p>
				<p>
					By default, the sort() method sorts the array elements in ascending
					order with the smallest value first and largest value last.
				</p>
				<p>
					The sort() method casts elements to strings and compares the strings
					to determine the orders.
				</p>
				<h3>Consider the example</h3>
				<div className="bg123">
					<p>let numbers = [0, 1 , 2, 3, 10, 20, 30 ]; </p>
					<p> numbers.sort();</p>
					console.log(numbers);
				</div>
				<button onClick={change123} className="asdf">
					Output
				</button>
				{click && <p>[ 0, 1, 10, 2, 20, 3, 30 ]</p>}
				<p>
					In this example, the sort() method places 10 before 2 because the
					string “10” comes before “2” when doing a string comparison. To fix
					this, you need to pass a compare function to the sort() method. The
					sort() method will use the compare function to determine the orders of
					elements.
				</p>
				<h1>Comparator method in Javascript</h1>
				<p>
					The compare function of the sort() method accepts two arguments and
					returns a value that determines the sort order. The following
					illustrates the syntax of the compare function:
				</p>
				<p>
					<b>
						{" "}
						function compare(a,b){" "}
						{
							// ...
						}
					</b>
				</p>
				<p>
					The compare() function accepts two arguments a and b. The sort()
					method will sort elements based on the return value of the compare()
					function with the following rules:
					<ol>
						<li>
							<p>
								If compare(a,b) is less than zero, the sort() method sorts a to
								a lower index than b. In other words, a will come first.
							</p>
						</li>
						<li>
							<p>
								If compare(a,b) is greater than zero, the sort() method sort b
								to a lower index than a, i.e., b will come first.
							</p>
						</li>
						<li>
							<p>
								If compare(a,b) returns zero, the sort() method considers a
								equals b and leaves their positions unchanged.
							</p>
						</li>
					</ol>
				</p>
				<h3>Consider the example</h3>
				<div className="bg123">
					<p>let numbers = [0, 1 , 2, 3, 10, 20, 30 ]; </p>
					<p>
						{`numbers.sort( function( a , b){
                                 if(a > b) return 1;
                                      if(a < b) return -1;
                                        return 0;
                        });`}
					</p>
					console.log(numbers);
				</div>
				<button onClick={change123} className="asdf">
					Output
				</button>
				{click && <p>[ 0, 1, 2, 3, 10, 20, 30 ]</p>}
			</section>
		</>
	);
};
export default SortingInJs;
