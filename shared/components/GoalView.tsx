import { CSSProperties } from "react";
import getProgressBarLayoutText from "../../src/helpers/getProgressBarLayoutText";
import { GoalTextPosition } from "../enums";
import type { IGoal } from "../types";
import computePXSize from "../utils/computePXSize";

const GoalView = ({
	goal,
	width,
	height,
	backgroundColor,
	currentAmount,
}: {
	goal: IGoal;
	width: number;
	height: number;
	backgroundColor?: string;
	currentAmount: number;
}) => {
	const currentAmountPercent = Math.floor(
		(currentAmount / goal.amount_raise) * 100,
	);
	const progressBarLayoutText = getProgressBarLayoutText({
		layout: goal.progress_bar_layout,
		currentAmount,
		amountRaise: goal.amount_raise,
		currentAmountPercent,
	});

	const titleStyle: CSSProperties = {
		display: "block",
		fontSize: computePXSize({
			percent: goal.title_style.font_size,
			width,
			coefficient: 11,
		}),
		color: goal.title_style.text_color,
		fontWeight: goal.title_style.bold ? "bold" : undefined,
		fontStyle: goal.title_style.italics ? "italic" : undefined,
		textDecoration: goal.title_style.underline ? "underline" : undefined,
		letterSpacing: computePXSize({
			percent: goal.title_style.letter_spacing,
			width,
		}),
		wordSpacing: computePXSize({
			percent: goal.title_style.word_spacing,
			width,
		}),
	};
	const progressStyle: CSSProperties = {
		display: "block",
		fontSize: computePXSize({
			percent: goal.progress_style.font_size,
			width,
			coefficient: 11,
		}),
		color: goal.progress_style.text_color,
		fontWeight: goal.progress_style.bold ? "bold" : undefined,
		fontStyle: goal.progress_style.italics ? "italic" : undefined,
		textDecoration: goal.progress_style.underline ? "underline" : undefined,
		letterSpacing: computePXSize({
			percent: goal.progress_style.letter_spacing,
			width,
		}),
		wordSpacing: computePXSize({
			percent: goal.progress_style.word_spacing,
			width,
		}),
	};
	const limitsStyle: CSSProperties = {
		display: "block",
		fontSize: computePXSize({
			percent: goal.limits_style.font_size,
			width,
			coefficient: 11,
		}),
		color: goal.limits_style.text_color,
		fontWeight: goal.limits_style.bold ? "bold" : undefined,
		fontStyle: goal.limits_style.italics ? "italic" : undefined,
		textDecoration: goal.limits_style.underline ? "underline" : undefined,
		letterSpacing: computePXSize({
			percent: goal.limits_style.letter_spacing,
			width,
		}),
		wordSpacing: computePXSize({
			percent: goal.limits_style.word_spacing,
			width,
		}),
	};

	return (
		<div
			style={{
				height,
				width,
				backgroundColor,
				display: "flex",
				flexDirection: "column",
				placeItems: "center",
				gap: 5,
				color: "white",
				fontSize: 25,
				overflow: "hidden",
				textAlign: "center",
				overflowWrap: "anywhere",
			}}
		>
			{goal.goal_title_type === GoalTextPosition.OnTop && (
				<div style={titleStyle}>{goal.title}</div>
			)}
			{goal.goal_progress_bar === GoalTextPosition.OnTop && (
				<div style={progressStyle}>{progressBarLayoutText}</div>
			)}
			<div
				style={{
					width: "90%",
					minHeight: `${10 + 20 * (goal.bar_height / 50)}%`,
					position: "relative",
					borderRadius: `${goal.rounding_radius}px`,
					border: `solid ${goal.bar_stroke_thickness / 10}px white`,
					display: "grid",
					placeContent: "center",
					overflow: "hidden",
				}}
			>
				<div style={{ position: "absolute", inset: 0 }}>
					<div
						style={{
							height: "100%",
							background: goal.background_bar_color,
							position: "relative",
						}}
					>
						<div
							style={{
								height: "100%",
								width: `${currentAmountPercent}%`,
								transition: "width 0.3s ease",
								background: goal.progress_bar_color,
								position: "absolute",
								inset: 0,
							}}
						></div>
					</div>
				</div>

				<div
					style={{
						position: "relative",
						height: "100%",
						overflowWrap: "anywhere",
					}}
				>
					{goal.goal_title_type === GoalTextPosition.Inside && (
						<div style={titleStyle}>{goal.title}</div>
					)}
					{goal.goal_progress_bar === GoalTextPosition.Inside && (
						<div style={progressStyle}>{progressBarLayoutText}</div>
					)}
				</div>
			</div>
			<div style={{ width: "90%", position: "relative" }}>
				{goal.goal_amount_limits && (
					<div
						style={{
							...limitsStyle,
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<span>0</span>
						<span>{goal.amount_raise}</span>
					</div>
				)}
				<div
					style={{
						position: "absolute",
						inset: 0,
						alignContent: "center",
						overflowWrap: "anywhere",
					}}
				>
					{goal.goal_title_type === GoalTextPosition.Below && (
						<div style={titleStyle}>{goal.title}</div>
					)}
					{goal.goal_progress_bar === GoalTextPosition.Below && (
						<div style={progressStyle}>{progressBarLayoutText}</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default GoalView;
