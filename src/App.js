import "./App.css";
import Main from "./Components/Main/Main";

const arr = [
	{ id: 1, img: "images/avenger.jpg", vid: "videos/avg.mp4" },
	{ id: 2, img: "images/cap-am-win.jpg", vid: "videos/avg-2.mp4" },
	{ id: 3, img: "images/cap-am.jpg", vid: "videos/avg.mp4" },
	{ id: 4, img: "images/cap-merval.jpg", vid: "videos/avg-2.mp4" },
	{ id: 5, img: "images/iron-1.jpg", vid: "videos/avg.mp4" },
	{ id: 6, img: "images/iron-2.jpg", vid: "videos/avg-2.mp4" },
	{ id: 7, img: "images/iron-3.jpg", vid: "videos/avg.mp4" },
	{ id: 8, img: "images/in-hulk.jpg", vid: "videos/avg-2.mp4" },
	{ id: 9, img: "images/thor-dark.jpg", vid: "videos/avg.mp4" },
	{ id: 10, img: "images/thor.jpg", vid: "videos/avg-2.mp4" },
];

function App() {
	return (
		<>
			<Main arr={arr} />
		</>
	);
}

export default App;
