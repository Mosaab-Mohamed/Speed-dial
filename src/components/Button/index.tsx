import { useEffect, useState } from "react";
import { StyledButton } from "./styled";
import { ButtonProps } from "../../types";

export default function Button(props: ButtonProps) {
	let {
		isOpen,
		dimension,
		index,
		direction,
		distance,
		degree,
		nbrItems,
		backgroundColor,
		children,
	} = props;

	const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		if (!isOpen) {
			setCoordinates((prev) => ({ ...prev, x: 0, y: 0 }));
			return;
		}

		let translateX = 0,
			translateY = 0;
		switch (direction) {
			case "up":
				translateY = -((dimension + dimension * 0.33) * (index + 1));
				break;
			case "down":
				translateY = (dimension + dimension * 0.33) * (index + 1);
				break;
			case "left":
				translateX = -((dimension + dimension * 0.33) * (index + 1));
				break;
			case "right":
				translateX = (dimension + dimension * 0.33) * (index + 1);
				break;
			case "circular":
				let angle = degree / nbrItems;
				if (degree >= 360) angle = 360 / (nbrItems + 1);

				let radian = angle * (Math.PI / 180);
				translateX = Math.cos(radian * index) * distance;
				translateY = Math.sin(radian * index) * distance;
		}

		setCoordinates((prev) => ({ ...prev, x: translateX, y: translateY }));
	}, [isOpen]);

	return (
		<StyledButton
			$isOpen={isOpen}
			$dimension={dimension}
			$index={index}
			$translateX={coordinates.x}
			$translateY={coordinates.y}
			$backgroundColor={backgroundColor}
		>
			{children}
		</StyledButton>
	);
}
