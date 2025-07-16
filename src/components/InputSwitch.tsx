import { InputAdornment, TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";
import OnOffSwitch from "./OnOffSwitch";

const InputSwitch = ({
	checked,
	inputValue,
	onChange,
	onSwitchChange,
	min,
	inputMax,
	adornmentText,
}: {
	checked: boolean;
	inputValue: number;
	onChange: (value: number) => void;
	onSwitchChange: () => void;
	min: number;
	inputMax: number;
	adornmentText: string;
}) => {
	return (
		<div style={{ display: "flex", width: "300px", placeItems: "center" }}>
			<OnOffSwitch checked={checked} onChange={onSwitchChange} />
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
export default InputSwitch;
