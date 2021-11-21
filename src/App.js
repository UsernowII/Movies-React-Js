import logo from './logo.svg';
import './App.css';
import ListMovies from './views/ListMovies';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from './views/Blog';


function App() {


  return (
	<Router>
		<Routes>
			<Route path="/" caseSensitive={false} element={<ListMovies />} />
			<Route path="/blog" caseSensitive={false} element={<Blog />} />	
		</Routes>
	</Router>

	

  );
}

export default App;
