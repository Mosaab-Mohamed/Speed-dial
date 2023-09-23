import { styled } from "styled-components";

export const StyledButton = styled.button<{
	$isOpen: boolean;
	$dimension: number;
	$index: number;
	$translateX: number;
	$translateY: number;
	$backgroundColor: string;
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${(props) => props.$dimension}px;
	width: ${(props) => props.$dimension}px;
	background-color: ${(props) => props.$backgroundColor};
	border-radius: ${(props) => props.$dimension * 0.5}px;
	padding: ${(props) => props.$dimension * 0.25}px;
	cursor: pointer;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1;
	opacity: ${(props) => (props.$isOpen ? 1 : 0)};
	border-width: 1px;
	border-color: rgba(0, 0, 0, 0.2);
	box-shadow: 0 0 5px 2px rgb(187 185 185);
	outline: none;
	overflow: hidden;
	transform: translate(
		${(props) => props.$translateX}px,
		${(props) => props.$translateY}px
	);
	transition: all ${(props) => props.$index * 50 + 200}ms
		cubic-bezier(0.71, 0.71, 0, 1.18) 0ms;
`;

export const StyledImg = styled.img`
	width: 100%;
	height: 100%;
`;
