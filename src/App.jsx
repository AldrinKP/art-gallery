import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Location from './pages/Location';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="location" element={<Location />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
