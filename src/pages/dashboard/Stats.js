import { useEffect } from "react";
import { StatsContainer } from "../../components";

const Stats = () => {
	return (
		<>
			<StatsContainer />
			<div>
				<div class="my-4 md:mt-8 sm:mt-8 relative z-[1] rounded-lg border-failure-100 border-2">
					<h4 class="bg-failure-100 text-black rounded-t-md py-2 px-4 text-lg mb123">
						Table of Contents
					</h4>
					<div class="bg-white dark:bg-gray-800 p-4 rounded-b-lg">
						<div class="html-parser">
							<div>
								<div class="">
									<p class="chakra-text css-1u7rogo">
										<span class="leading-relaxed ">
											<div class="Primary_goals_card card-content-body">
												<ol>
													<li>
														<p>What is Sorting</p>
													</li>
													<li>
														<p>Applications of Sorting</p>
													</li>
													<li>
														<p>Sorting in Javascript</p>
													</li>
													<li>
														<p>Sorting Algorithms</p>
													</li>
												</ol>
											</div>
										</span>
									</p>
								</div>{" "}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Stats;
