import SpeedDial from "./components/SpeedDial";
import facebook from "/public/facebook.png";

type CustomButtonProps = {
	children?: React.ReactNode;
	onClick?: () => void;
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
			<div onClick={() => window.location.assign("/about")}>About</div>
		</SpeedDial>
	);
}
