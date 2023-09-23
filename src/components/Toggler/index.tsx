import { TogglerProps } from "../../types";
import {
	StyledToggler,
	StyledSpanOne,
	StyledSpanTwo,
	StyledSpanThree,
} from "./styled";

export default function Toggler(props: TogglerProps) {
	const {
		isOpen,
		setIsOpen,
		buttonType,
		dimension,
		buttonColor,
		backgroundColor,
	} = props;

	const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setIsOpen(!isOpen);
	};

	return (
		<StyledToggler
			$buttonType={buttonType}
			$dimension={dimension}
			$backgroundColor={backgroundColor}
			$isOpen={isOpen}
			onClick={handleToggle}
		>
			<StyledSpanOne
				$buttonType={buttonType}
				$dimension={dimension}
				$buttonColor={buttonColor}
				$isOpen={isOpen}
			></StyledSpanOne>
			<StyledSpanTwo
				$buttonType={buttonType}
				$dimension={dimension}
				$buttonColor={buttonColor}
				$isOpen={isOpen}
			></StyledSpanTwo>
			<StyledSpanThree
				$buttonType={buttonType}
				$dimension={dimension}
				$buttonColor={buttonColor}
				$isOpen={isOpen}
			></StyledSpanThree>
		</StyledToggler>
	);
}
