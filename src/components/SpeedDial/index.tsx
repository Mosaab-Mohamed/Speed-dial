import Toggler from "../Toggler";
import Button from "../Button";
import { StyledFloatButton } from "./styled";
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
		buttonsList = [],
	} = props;

	const { isOpen, setIsOpen } = useToggle();

	return (
		<StyledFloatButton
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
			{buttonsList.map((item, index) => (
				<Button
					itemButton={item}
					degree={degree}
					dimension={dimension}
					direction={direction}
					distance={distance}
					index={index}
					isOpen={isOpen}
					backgroundColor={backgroundColor}
					nbrItems={buttonsList.length}
					key={index}
				/>
			))}
		</StyledFloatButton>
	);
}
