import { InputAdornment, Slider, TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";
const InputSlider = ({
	sliderValue,
	inputValue,
	onChange,
	min,
	sliderMax,
	inputMax,
	adornmentText,
}: {
	sliderValue: number;
	inputValue: number;
	onChange: (value: number) => void;
	min: number;
	sliderMax: number;
	inputMax: number;
	adornmentText: string;
}) => {
	return (
		<div style={{ display: "flex", width: "300px", placeItems: "center" }}>
			<Slider
				value={sliderValue}
				min={min}
				max={sliderMax}
				onChange={(_, value) => {
					onChange(value as number);
				}}
			/>
			<div style={{ marginLeft: 20, width: 100 }}>
				<NumericFormat
					style={{ width: 100 }}
					inputMode="decimal"
					autoComplete="off"
					allowNegative={false}
					valueIsNumericString
					decimalScale={0}
					min={min}
					isAllowed={({ floatValue }) =>
						floatValue === undefined || floatValue <= inputMax
					}
					customInput={TextField}
					slotProps={{
						input: {
							inputProps: {
								step: 1,
							},
							endAdornment: (
								<InputAdornment position="end">{adornmentText}</InputAdornment>
							),
						},
					}}
					onChange={(e) => {
						const value = Number(e.target.value);
						onChange(value);
					}}
					value={inputValue}
				/>
			</div>
		</div>
	);
};
export default InputSlider;
