import SpeedDial from "./components/SpeedDial";
import { ItemButton } from "./types";
import instagram from "/public/instagram.png";
import facebook from "/public/facebook.png";
import whatsapp from "/public/whatsapp.png";

const list: ItemButton[] = [
	{
		imgSrc: instagram,
		onClick: () => alert("You clicked instagram button"),
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
			bottom={50}
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
