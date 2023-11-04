export function elementsOverlap(el1, el2) {
	if (
		typeof el1 === 'object' &&
		el1 !== null &&
		'getBoundingClientRect' in el1
	) {
		const result = el1.getBoundingClientRect();
		console.log(result);
	}

	if (
		typeof el2 === 'object' &&
		el2 !== null &&
		'getBoundingClientRect' in el2
	) {
		const result = el2.getBoundingClientRect();
		console.log(result);
	}

	const domRect1 = el1[0].getBoundingClientRect();
	const domRect2 = el2[0].getBoundingClientRect();

	return !(
		domRect1.top > domRect2.bottom ||
		domRect1.right < domRect2.left ||
		domRect1.bottom < domRect2.top ||
		domRect1.left > domRect2.right
	);
}
