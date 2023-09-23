import { styled } from "styled-components";
import { ButtonType } from "../../types";

export const StyledToggler = styled.button<{
	$buttonType: ButtonType;
	$isOpen: boolean;
	$dimension: number;
	$backgroundColor: string;
}>`
	position: relative;
	z-index: 2;
	display: flex;
	flex-flow: column wrap;
	justify-content: space-around;
	align-items: center;
	height: ${(props) => props.$dimension}px;
	width: ${(props) => props.$dimension}px;
	padding: ${(props) => props.$dimension * 0.2 - 1}px;
	border-radius: ${(props) => props.$dimension * 0.5}px;
	background-color: ${(props) => props.$backgroundColor};
	border-color: rgba(0, 0, 0, 0.2);
	border-width: 1px;
	cursor: pointer;
	box-shadow: 0 0 5px 2px rgb(187 185 185);
	transition: all 0.5s ease;
	transform: ${(props) =>
		props.$buttonType === "plus" && props.$isOpen
			? "rotate(135deg)"
			: "rotate(0deg)"};
	outline: none;
	&:hover {
		box-shadow: none;
	}
`;

export const StyledSpan = styled.span<{
	$buttonType: ButtonType;
	$isOpen: boolean;
	$dimension: number;
	$buttonColor: string;
}>`
	display: block;
	position: ${(props) =>
		props.$buttonType === "plus" || props.$buttonType === "hori_dots"
			? "absolute"
			: "relative"};
	width: ${(props) =>
		props.$buttonType === "hori_dots" || props.$buttonType === "vert_dots"
			? props.$dimension * 0.1
			: props.$buttonType === "plus"
			? props.$dimension * 0.5
			: props.$dimension * 0.6}px;
	height: ${(props) =>
		props.$buttonType === "hori_dots" || props.$buttonType === "vert_dots"
			? props.$dimension * 0.1
			: props.$dimension * 0.075}px;
	border-radius: ${(props) =>
		props.$buttonType === "vert_dots" || props.$buttonType === "hori_dots"
			? props.$dimension * 0.1
			: (props.$dimension * 0.075) / 2}px;
	transform-origin: ${(props) =>
		props.$buttonType === "plus" ? "center center" : "center left"};
	background-color: ${(props) => props.$buttonColor};
	transition: all 0.2s linear;
`;

export const StyledSpanOne = styled(StyledSpan)`
	left: ${(props) =>
		props.$buttonType === "hamburger" && props.$isOpen
			? "12.5%"
			: props.$buttonType === "hori_dots"
			? `25%`
			: "initial"};
	top: ${(props) =>
		props.$buttonType === "hamburger" && props.$isOpen ? "-2.5%" : "initial"};
	transform: ${(props) =>
		props.$buttonType === "plus"
			? "rotate(90deg)"
			: props.$buttonType === "hamburger" && props.$isOpen
			? "rotate(45deg)"
			: "rotate(0deg)"};
`;

export const StyledSpanTwo = styled(StyledSpan)`
	display: ${(props) => (props.$buttonType === "plus" ? "none" : "block")};
	opacity: ${(props) =>
		props.$buttonType === "hamburger" && props.$isOpen ? 0 : 1};
`;

export const StyledSpanThree = styled(StyledSpan)`
	left: ${(props) =>
		props.$buttonType === "hamburger" && props.$isOpen ? "12.5%" : "initial"};
	top: ${(props) =>
		props.$buttonType === "hamburger" && props.$isOpen ? "2.5%" : "initial"};
	right: ${(props) => (props.$buttonType === "hori_dots" ? "25%" : "initial")};
	transform: ${(props) =>
		props.$buttonType === "hamburger" && props.$isOpen
			? "rotate(-45deg)"
			: "rotate(0deg)"};
`;
