import Toggler from "../Toggler";
import Button from "../Button";
import { StyledSpeedDialButton } from "./styled";
import { SpeedDialProps } from "../../types";
import useToggle from "../../hooks/useToggle";

export default function SpeedDial(props: SpeedDialProps) {
	const {
		buttonType = "plus",
		bottom = "100px",
		right = "100px",
		top = "initial",
		left = "initial",
		direction = "up",
		dimension = 50,
		distance = 80,
		degree = 180,
		backgroundColor = "#e3e3e3",
		buttonColor = "#4f4f51",
		children,
	} = props;

	const { isOpen, setIsOpen } = useToggle();

	return (
		<StyledSpeedDialButton
			$top={top}
			$left={left}
			$right={right}
			$bottom={bottom}
		>
			<Toggler
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				buttonType={buttonType}
				backgroundColor={backgroundColor}
				buttonColor={buttonColor}
				dimension={dimension}
			/>
			{Array.isArray(children) ? (
				children.map((item, index) => (
					<Button
						degree={degree}
						dimension={dimension}
						direction={direction}
						distance={distance}
						index={index}
						isOpen={isOpen}
						backgroundColor={backgroundColor}
						nbrItems={children.length}
						key={index}
					>
						{item}
					</Button>
				))
			) : (
				<Button
					degree={degree}
					dimension={dimension}
					direction={direction}
					distance={distance}
					index={0}
					isOpen={isOpen}
					backgroundColor={backgroundColor}
					nbrItems={1}
					key={0}
				>
					{children}
				</Button>
			)}
		</StyledSpeedDialButton>
	);
}
