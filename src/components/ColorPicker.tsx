import { useState } from "react";
import { type ColorResult, SketchPicker } from "react-color";

const ColorPicker = ({
	initialColor,
	onChange,
}: {
	initialColor: string;
	onChange: (color: string) => void;
}) => {
	const [displayColorPicker, setDisplayColorPicker] = useState(false);
	const [color, setColor] = useState(initialColor);

	const handleClick = () => {
		setDisplayColorPicker(!displayColorPicker);
	};

	const handleClose = () => {
		setDisplayColorPicker(false);
	};

	const handleChange = (colorResult: ColorResult) => {
		const color = `rgba(${colorResult.rgb.r}, ${colorResult.rgb.g}, ${colorResult.rgb.b}, ${colorResult.rgb.a})`;
		setColor(color);
		onChange(color);
	};

	return (
		<div>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			{/** biome-ignore lint/a11y/noStaticElementInteractions: <explanation> */}
			<div
				style={{
					padding: "10px",
					background: "#fff",
					borderRadius: "4px",
					boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
					display: "inline-block",
					cursor: "pointer",
				}}
				onClick={handleClick}
			>
				<div
					style={{
						width: "36px",
						height: "14px",
						borderRadius: "2px",
						background: color,
					}}
				/>
			</div>
			{displayColorPicker ? (
				<div
					style={{
						position: "absolute",
						zIndex: "2",
					}}
				>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					{/** biome-ignore lint/a11y/noStaticElementInteractions: <explanation> */}
					<div
						style={{
							position: "fixed",
							top: "0px",
							right: "0px",
							bottom: "0px",
							left: "0px",
						}}
						onClick={handleClose}
					/>
					<SketchPicker
						color={color}
						onChange={handleChange}
						presetColors={[]}
					/>
				</div>
			) : null}
		</div>
	);
};

export default ColorPicker;
