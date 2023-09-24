import { CSSProperties } from "react";

export type SpeedDialProps = Partial<{
	direction: Direction;
	top: number | string;
	left: number | string;
	bottom: number | string;
	right: number | string;
	buttonType: ButtonType;
	dimension: number;
	backgroundColor: string;
	buttonColor: string;
	distance: number;
	degree: number;
	togglerStyleOverrides: CSSProperties;
	buttonStyleOverrides: CSSProperties;
}> & { children: React.ReactElement | React.ReactElement[] };

export type ButtonProps = {
	isOpen: boolean;
	dimension: number;
	index: number;
	nbrItems: number;
	distance: number;
	degree: number;
	direction: Direction;
	backgroundColor: string;
	children: React.ReactElement;
};

export type Direction = "up" | "down" | "right" | "left" | "circular";

export type ButtonType = "plus" | "hori_dots" | "vert_dots" | "hamburger";

export type TogglerProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	dimension: number;
	backgroundColor: string;
	buttonColor: string;
	buttonType: ButtonType;
};
