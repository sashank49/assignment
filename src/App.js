import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Landing, Error, Register, ProtectedRoute } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SortingInJs from "./pages/dashboard/SortingInJs";
import TypesOfSorting from "./pages/dashboard/TypesOfSorting";
import Introduction from "./pages/dashboard/Introduction";
import Applications from "./pages/dashboard/Applications";
import { Profile, Stats, SharedLayout } from "./pages/dashboard";
import BubbleSort from "./pages/dashboard/BubbleSort";
import SelectionSort from "./pages/dashboard/SelectionSort";
import InsertionSort from "./pages/dashboard/InsertionSort";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<Stats />} />
					<Route path="intro" element={<Introduction />} />
					<Route path="appli" element={<Applications />} />
					<Route path="sorting-in-js" element={<SortingInJs />} />
					<Route path="types-of-sorting" element={<TypesOfSorting />} />
					<Route path="bubble-sort" element={<BubbleSort />} />
					<Route path="selection-sort" element={<SelectionSort />} />
					<Route path="insertion-sort" element={<InsertionSort />} />
					<Route path="profile" element={<Profile />} />
				</Route>
				<Route path="landing" element={<Landing />} />
				<Route path="register" element={<Register />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<ToastContainer position="top-center" />
		</BrowserRouter>
	);
}

export default App;
