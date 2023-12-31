import { intersectTri } from '../../utils/ThreeRayIntersectUtilities.js';
import { setTriangle } from '../../utils/TriangleUtilities.js';

/*************************************************************/
/* This file is generated from "iterationUtils.template.js". */
/*************************************************************/
/* eslint-disable indent */

function intersectTris_indirect( bvh, side, ray, offset, count, intersections ) {

	const { geometry, _indirectBuffer } = bvh;
	for ( let i = offset, end = offset + count; i < end; i ++ ) {

		let vi = _indirectBuffer ? _indirectBuffer[ i ] : i;
		intersectTri( geometry, side, ray, vi, intersections );


	}

}

function intersectClosestTri_indirect( bvh, side, ray, offset, count ) {

	const { geometry, _indirectBuffer } = bvh;
	let dist = Infinity;
	let res = null;
	for ( let i = offset, end = offset + count; i < end; i ++ ) {

		let intersection;
		intersection = intersectTri( geometry, side, ray, _indirectBuffer ? _indirectBuffer[ i ] : i );


		if ( intersection && intersection.distance < dist ) {

			res = intersection;
			dist = intersection.distance;

		}

	}

	return res;

}

function iterateOverTriangles_indirect(
	offset,
	count,
	bvh,
	intersectsTriangleFunc,
	contained,
	depth,
	triangle
) {

	const { geometry } = bvh;
	const { index } = geometry;
	const pos = geometry.attributes.position;
	for ( let i = offset, l = count + offset; i < l; i ++ ) {

		let tri;
		tri = bvh.resolveTriangleIndex( i );

		setTriangle( triangle, tri * 3, index, pos );
		triangle.needsUpdate = true;

		if ( intersectsTriangleFunc( triangle, tri, contained, depth ) ) {

			return true;

		}

	}

	return false;

}

export { intersectClosestTri_indirect, intersectTris_indirect, iterateOverTriangles_indirect };
