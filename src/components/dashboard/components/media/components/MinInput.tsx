import { TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";

const MinInput = ({
	value,
	onChange,
}: { value: number; onChange: (value: number) => void }) => {
	return (
		<NumericFormat
			style={{ width: 100 }}
			inputMode="decimal"
			autoComplete="off"
			allowNegative={false}
			valueIsNumericString
			decimalScale={0}
			min={0}
			customInput={TextField}
			onChange={(e) => {
				const value = Number(e.target.value);
				onChange(value);
			}}
			value={value}
		/>
	);
};
export default MinInput;
