/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

export const useMergedRefs = (
	refs
) =>
		React.useCallback((current) => {
			refs.forEach((ref) => {
				if (typeof ref === 'function')
					ref(current);
				else if (ref && !Object.isFrozen(ref))
					(ref).current = current;
			});
		}, refs);

