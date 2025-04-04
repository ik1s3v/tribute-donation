interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}
const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;
	return (
		<div hidden={value !== index} {...other}>
			{value === index && <>{children}</>}
		</div>
	);
};
export default TabPanel;
