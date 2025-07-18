import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
	AdvancedMarker,
	Map as GoogleMap,
	useMap,
	useMapsLibrary,
} from "@vis.gl/react-google-maps";
import type { AppState } from "../../../../../store";

const AppMap = () => {
	const { startPosition, currentPath, isPointSet, currentPosition } =
		useSelector((state: AppState) => state.maptionState);
	const map = useMap();
	const maps = useMapsLibrary("maps");

	useEffect(() => {
		if (!maps) return;
		if (!map) return;
		if (!isPointSet) return;
		const path = new maps.Polyline({
			path: currentPath,
			geodesic: true,
			strokeColor: "#e90a0aff",
			strokeOpacity: 0.8,
			strokeWeight: 3,
		});

		path.setMap(map);
		map.panTo(currentPosition);
	}, [maps, currentPath, map, isPointSet, currentPosition]);

	return (
		<GoogleMap
			defaultCenter={startPosition}
			defaultZoom={17}
			mapId="142e67031261a967431f011a"
			disableDefaultUI
		>
			{isPointSet && <AdvancedMarker position={startPosition} />}
			{isPointSet && <AdvancedMarker position={currentPosition} />}
		</GoogleMap>
	);
};

export default AppMap;
