import classNames from "classnames";
import React from "react";

const Button = ({
	variant = "default",
	onClick,
	className,
	children,
	disabled,
}) => {
	const isIconOnly =
		React.Children.count(children) === 1 &&
		React.isValidElement(children) &&
		children.type !== "span";

	const getVariantClasses = () => {
		switch (variant) {
			case "solid":
				return "text-gray-700 bg-gray-200 rounded-lg py-2 px-4";
			case "plain":
				return "bg-transparent text-gray-700 py-2 px-4";
			case "close":
				return "text-white bg-red-700 rounded-lg py-2 px-4";
			default:
				return "bg-gray-200 text-gray-700";
		}
	};

	const classes = classNames(
		"transition-all duration-100 hover:opacity-50 active:opacity-70",
		getVariantClasses(),
		disabled && "opacity-50 cursor-not-allowed",
		className,
		isIconOnly && "w-auto h-auto p-2"
	);

	return (
		<button className={classes} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
