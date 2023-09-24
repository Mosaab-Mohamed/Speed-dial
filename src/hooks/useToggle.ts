import { useState, useEffect } from "react";

export default function useToggle() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);
	const handleCloseOnEsc = (e: KeyboardEvent) => {
		if (e.key === "Escape") handleClose();
	};

	useEffect(() => {
		window.addEventListener("click", handleClose);
		window.addEventListener("keydown", handleCloseOnEsc);

		return () => {
			window.removeEventListener("click", handleClose);
			window.removeEventListener("keydown", handleCloseOnEsc);
		};
	}, []);

	return { isOpen, setIsOpen, handleClose };
}
