import isDockPoint from '../checks/isDockPoint';
import DockPoint from '../DockPoint';

/**
 * Enforce that a value is a [DockPoint](docs/DockPoint.md). Uses [isDockPoint](docs/checks.md#isDockPoint).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer-ui';
 *
 * enforce.dockPoint(new DockPoint(DockPoint.POINTS.TOP), new DockPoint(DockPoint.POINTS.BOTTOM));
 * // => dockPoint of top
 *
 * enforce.dockPoint('top', new DockPoint(DockPoint.POINTS.BOTTOM));
 * // => dockPoint of bottom
 *
 * enforce.dockPoint('top', new DockPoint(DockPoint.POINTS.BOTTOM), true);
 * // => dockPoint of top
 * ```
 *
 * @function enforce.dockPoint
 * @alias enforceDockPoint
 *
 * @arg {*} value
 * @arg {String} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {DockPoint}
 */
export default (value, alt, coerce) => {
	if (isDockPoint(value)) {
		return value;
	}

	if (coerce === true && isDockPoint(value, true)) {
		return new DockPoint(value);
	}

	return alt;
};
