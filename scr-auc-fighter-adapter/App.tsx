import Announcer from "./components/Announcer";
import TeamsIds from "./components/TeamsIds";

const App = () => {
	return (
		<div
			style={{
				zIndex: 999,
				position: "relative",
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
