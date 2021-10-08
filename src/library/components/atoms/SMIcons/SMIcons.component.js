/* eslint-disable prettier/prettier */
import React from 'react';

//other deps
import Svg, { Path } from 'react-native-svg';

//constants
import { icons } from './SMIcons.constants';


//helpers
import { flattenStyle } from '../../../helpers';

export const SMIcons = React.memo(({
	name,
	color,
	size,
	style,
	width = 24,
	height = 24,
}) => {
	const _style = flattenStyle(style);

	const iconSize = (_style?.fontSize || size);
	const iconColor = (_style?.color || color);

	//renders
	const _renderPaths = () => {
		let iconName = name;

		if (!(iconName in icons))
			iconName = 'ic_wrong_icon';

		return icons[iconName].map((path) => {
			const evenOdd = (path.evenOdd) ? {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
			} : {};

			return (
				<Path
					{...evenOdd}
					key={path.d}
					d={path.d} />
			);
		});
	};

	return (
		<Svg
			width={iconSize}
			height={iconSize}
			viewBox={`0 0 ${width} ${height}`}
			fill={iconColor}
			style={_style}
		>
			{_renderPaths()}
		</Svg>
	);
});
