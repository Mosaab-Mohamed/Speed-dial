# SpeedDial Component ReadMe

The SpeedDial component is a versatile and customizable component for creating a floating menu of action buttons in your React applications. It provides an easy and interactive way to incorporate action buttons that can be triggered by a main button.

## Usage

You can use it in your React application as follows:

```jsx
import SpeedDial from "speed-dial";
import { ItemButton } from "./types";
import instagram from "/public/instagram.png";
import facebook from "/public/facebook.png";
import whatsapp from "/public/whatsapp.png";

const list: ItemButton[] = [
	{
		imgSrc: instagram,
		onClick: () => alert("You clicked the Instagram button"),
	},
	{
		imgSrc: whatsapp,
		onClick: () => window.location.assign("https://www.whatsapp.com"),
	},
	{
		itemElement: (
			<a href="https://www.facebook.com" target="_blank">
				<img src={facebook} style={{ width: "100%", height: "100%" }} />
			</a>
		),
	},
];

export default function App() {
	return (
		<SpeedDial
			bottom="50px"
			left="50px"
			buttonType="plus"
			degree={360}
			dimension={55}
			distance={100}
			direction="up"
			buttonsList={list}
		/>
	);
}
```

In this example, we import the SpeedDial component and the required types. We also import the images for the action buttons. Then, we create a list of `ItemButton` objects, where each object represents an action button with its `imgSrc` or `itemElement` of type ReactElement and `onClick` properties.

We render the SpeedDial component with various props to configure its appearance and behavior. These props are defined by the `SpeedDialProps` type, which we will explain in the next section.

## SpeedDialProps

The `SpeedDialProps` type defines the properties that you can pass to the SpeedDial component to customize its behavior and appearance. Here are the available properties:

-  `direction`: Specifies the direction in which the SpeedDial menu expands (e.g., "up", "down", "left", "right").
-  `top`, `left`, `bottom`, `right`: Positioning properties to control the initial placement of the SpeedDial menu.
-  `buttonType`: Sets the main button type (e.g., "plus", "circle", etc.).
-  `dimension`: Defines the size of the main button.
-  `backgroundColor`: Sets the background color of the SpeedDial menu.
-  `buttonColor`: Sets the color of the main button.
-  `distance`: Controls the distance between the main button and the action buttons.
-  `degree`: Specifies the angle (in degrees) at which the action buttons are positioned.
-  `buttonsList`: An array of `ItemButton` objects that define each action button.
-  `togglerStyleOverrides`: CSS properties to override the style of the main button.
-  `buttonStyleOverrides`: CSS properties to override the style of the action buttons.

You can customize these properties to achieve the desired appearance and behavior for your SpeedDial component.

## Direction

The `Direction` type defines the possible directions in which the SpeedDial menu can expand. It includes the following values: "up," "down," "left," and "right."

## ButtonType

The `ButtonType` type specifies the main button types available for the SpeedDial component. You can use one of the following values: "plus," "circle," or "custom."

## ItemButton

The `ItemButton` type describes an individual action button within the SpeedDial component. It includes the following properties:

-  `imgSrc`: A string representing the image source for the button (optional).
-  `itemElement`: A JSX element for a custom button (optional).
-  `onClick`: A callback function that is executed when the button is clicked.

You can create action buttons by defining objects of this type in your application.

## CSSProperties

The `CSSProperties` type is a generic type representing CSS properties that can be applied to style components using inline styles.
