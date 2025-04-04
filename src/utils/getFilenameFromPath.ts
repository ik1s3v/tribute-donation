const getFilenameFromPath = (path: string) => {
	const normalizedPath = path.replace(/\\/g, "/");

	const filename = normalizedPath.split("/").pop() ?? "";

	return filename;
};
export default getFilenameFromPath;
