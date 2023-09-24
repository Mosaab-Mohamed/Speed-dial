# SpeedDial Component ReadMe

The SpeedDial component is a versatile and customizable component for creating a floating menu of action buttons in your React applications. It provides an easy and interactive way to incorporate action buttons that can be triggered by a main button.

## Usage

You can use it in your React application as follows:

// Javascript code here

import SpeedDial from "./components/SpeedDial";
import facebook from "/public/facebook.png";

type CustomButtonProps = {
  children?: React.ReactNode,
  onClick?: () => void,
};

const CustomButton = ({ children, onClick }: CustomButtonProps) => {
  return <div onClick={onClick}>{children}</div>;
};

export default function App() {
  return (
    <SpeedDial
      bottom={50}
      left="50px"
      buttonType="plus"
      degree={360}
      dimension={55}
      distance={100}
      direction="up"
    >
      <CustomButton onClick={() => window.location.assign("/about")}>
        About
      </CustomButton>
      <CustomButton onClick={() => alert("home")}>Home</CustomButton>
      <CustomButton>
        <a
          href="https://www.facebook.com"
          target="_blank"
          style={{ padding: "12px" }}
        >
          <img src={facebook} style={{ width: "100%", height: "100%" }} />
        </a>
      </CustomButton>
    </SpeedDial>
  );
}


In the code snippet above, within the SpeedDial component, you can pass children in the form of either React components (like CustomButton) or regular HTML tags (like `<div>` and `<a>`). You have the flexibility to include preferred props and styles as needed for each child element. This approach allows you to customize the appearance and behavior of the action buttons inside the SpeedDial component according to your preferences.

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
