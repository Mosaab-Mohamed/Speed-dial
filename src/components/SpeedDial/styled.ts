import { styled } from "styled-components";

export const StyledSpeedDialButton = styled.div<{
	$top: number | string;
	$left: number | string;
	$bottom: number | string;
	$right: number | string;
}>`
	position: absolute;
	z-index: 1000;
	left: ${(props) =>
		typeof props.$left === "string" ? props.$left : `${props.$left}px`};
	top: ${(props) =>
		typeof props.$top === "string" ? props.$top : `${props.$top}px`};
	bottom: ${(props) =>
		typeof props.$bottom === "string" ? props.$bottom : `${props.$bottom}px`};
	right: ${(props) =>
		typeof props.$right === "string" ? props.$right : `${props.$right}px`};
	& * {
		box-sizing: border-box;
	}
`;
