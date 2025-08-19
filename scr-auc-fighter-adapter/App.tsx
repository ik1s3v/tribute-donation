import Announcer from "./components/Announcer";
import TeamsIds from "./components/TeamsIds";

const App = () => {
	return (
		<div
			style={{
				zIndex: 99999,
				position: "absolute",
				width: "100%",
				height: "100%",
				display: "grid",
				placeContent: "center",
			}}
		>
			<Announcer />
			<TeamsIds />
		</div>
	);
};
export default App;
