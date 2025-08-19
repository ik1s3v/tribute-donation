export default class HotReload {
	constructor(socket: WebSocket) {
		socket.addEventListener("open", () => {
			if (
				process.env.NODE_ENV === "development" &&
				localStorage.getItem("isHotReload") === "true"
			) {
				localStorage.removeItem("isHotReload");
				location.reload();
			}
		});
		socket.addEventListener("error", () => {
			if (process.env.NODE_ENV === "development") {
				localStorage.setItem("isHotReload", "true");
			}
		});
	}
}
