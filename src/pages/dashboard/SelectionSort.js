import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import Button from "../../assets/Button";

import sound1 from "../../assets/sound1.wav";
import sound2 from "../../assets/sound2.wav";
const ARRAYSIZE = 10;

const SelectionSort = () => {
	const [primaryArray, setPrimaryArray] = useState([]);
	const [algorithm, setAlgorithm] = useState("selectionSort");
	const [animationSpeed, setAnimationSpeed] = useState(500);
	const [soundOn, setSoundOn] = useState(true);
	const [disableOptions, setDisableOptions] = useState(false);
	const [playBeep1] = useSound(sound1, { volume: soundOn ? 0.15 : 0 });
	const [playBeep2] = useSound(sound2, { volume: soundOn ? 0.05 : 0 });
	const handleSorting = () => {
		setDisableOptions(true);
		switch (algorithm) {
			case "selectionSort":
				selectionSort();
				break;

			default:
				break;
		}
	};

	const randomizeArray = () => {
		for (let i = 0; i < primaryArray.length; i++) {
			let bar = document.getElementById(i).style;
			bar.backgroundColor = "#ff7f50";
		}
		let array = [];
		for (let i = 0; i < ARRAYSIZE; i++) {
			array.push(randomVals(20, 200));
		}

		setPrimaryArray(array);
	};
	const randomVals = (min, max) => {
		let randomVal = Math.floor(Math.random() * (max - min + 1) + min);
		return randomVal;
	};

	useEffect(() => {
		randomizeArray();
	}, []);

	const sleep = (milliSeconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliSeconds));
	};

	const finishedAnimation = async () => {
		for (let i = 0; i < primaryArray.length; i++) {
			let bar = document.getElementById(i).style;
			bar.backgroundColor = "green";
			playBeep1();
			await sleep(animationSpeed);
		}
		setDisableOptions(false);
	};
	const selectionSort = async () => {
		let currentArr = primaryArray;
		let sorted = false;
		setAlgorithm({ name: "Selection Sort", timeComplexity: "O(n^2)" });

		while (!sorted) {
			sorted = true;

			for (let i = 0; i < currentArr.length - 1; i++) {
				for (let j = i + 1; j < currentArr.length; j++) {
					if (currentArr[i] > currentArr[j]) {
						let swap1 = currentArr[i];
						let swap2 = currentArr[j];
						currentArr[i] = swap2;
						currentArr[j] = swap1;
						setPrimaryArray([...primaryArray, currentArr]);

						let bar1 = document.getElementById(i).style;
						let bar2 = document.getElementById(j).style;
						bar1.backgroundColor = "#DC143C";
						bar2.backgroundColor = "#6A5ACD";

						await sleep(animationSpeed);

						bar1.backgroundColor = "#FF7F50";
						bar2.backgroundColor = "#FF7F50";

						sorted = false;
						playBeep1();
					}
				}
				playBeep2();
			}
			if (sorted) finishedAnimation();
		}
	};
	return (
		<>
			<section className="sc-eDWCr cdIfEu">
				<h1>Selection Sort Algorithm</h1>
				<p>
					The selection sort algorithm sorts an array by repeatedly finding the
					minimum element (considering ascending order) from the unsorted part
					and putting it at the beginning.
				</p>
				<h4>
					<b>How selection sort works?</b>
				</h4>
				<p>
					Lets consider the following array as an example: arr[] =[64, 25, 12,
					22, 11]
				</p>
				<p>
					<b>First pass:</b>{" "}
					<p>
						For the first position in the sorted array, the whole array is
						traversed from index 0 to 4 sequentially. The first position where
						64 is stored presently, after traversing whole array it is clear
						that 11 is the lowest value.
						<p> [ 11 ,25 ,12 ,22 ,64 ] </p>
					</p>
				</p>
				<p>
					<b>Second Pass:</b>{" "}
					<p>
						After traversing, we found that 12 is the second lowest value in the
						array and it should appear at the second place in the array, thus
						swap these values.
						<p> [ 11 ,12 ,25 ,22 ,64 ] </p>
					</p>
				</p>
				<p>
					<b>Third Pass:</b>{" "}
					<p>
						While traversing, 22 came out to be the third least value and it
						should appear at the third place in the array, thus swap 22 with
						element present at third position.
						<p> [ 11 ,12 ,22 ,25 ,64 ] </p>
					</p>
				</p>
				<p>
					<b>Fourth pass:</b>{" "}
					<p>
						Similarly, for fourth position traverse the rest of the array and
						find the fourth least element in the array As 25 is the 4th lowest
						value hence, it will place at the fourth position.
						<p> [ 11 ,12 ,22 ,25 ,64 ] </p>
					</p>
				</p>
				<p>
					<b>Fifth pass:</b>{" "}
					<p>
						At last the largest value present in the array automatically get
						placed at the last position in the array The resulted array is the
						sorted array.
						<p> [ 11 ,12 ,22 ,25 ,64 ] </p>
					</p>
				</p>
			</section>
			<div className="heightwe">
				<div className="header">
					<Button
						type="NEWARRAY"
						name="New Array"
						onClick={randomizeArray}
						disabled={disableOptions}
					/>
					<h3>Selection Sort Visualizer</h3>
					<Button
						onClick={handleSorting}
						type="SORT"
						name="Sort"
						disabled={disableOptions}
					/>
				</div>
				<p>
					{primaryArray &&
						primaryArray.map((val, key) => [
							<span className="span123">
								{val}
								{` `}
							</span>,
						])}
				</p>
				<div className="sortingBars">
					{primaryArray &&
						primaryArray.map((val, key) => {
							return (
								<span>
									<div
										className="bars qwert"
										id={key}
										key={key}
										style={{ height: val }}
									></div>
									<span>{val}</span>
								</span>
							);
						})}
				</div>
				<div className="center">
					<div>Time Complexity: {`O(n^2)`}</div>
				</div>
			</div>
		</>
	);
};
export default SelectionSort;
