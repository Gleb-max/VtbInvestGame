/* eslint-disable prettier/prettier */
export const scaleFont = (size) => size;

export function boxShadow(
	color,
	{ x, y } = { x: 2, y: 2 },
	radius = 8,
	opacity = 0.2,
	elevation = 2,
) {
	return {
		shadowColor: color,
		shadowOffset: {
			width: x,
			height: y,
		},
		shadowOpacity: opacity,
		shadowRadius: radius,
		elevation: elevation,
	};
}
