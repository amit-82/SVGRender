import { CoordsToElemAttrsMap, CoordsToElemAttrs } from './CoordsToElemAttrs';
import { Coord, CoordType, CubicBezierCoord, QuadraticBezierCoord } from '../interfaces';

describe('Test circle CoordinateParser', () => {
	const parser: CoordsToElemAttrs = CoordsToElemAttrsMap['circle'];
	test('CoordinateParser reject validation of no coords', () => {
		expect(parser.validateCoordinates([])).toBeFalsy();
	});

	test('CoordinateParser reject validation with too many coords', () => {
		const coords = [
			{ type: CoordType.Linear, x: 25, y: 25 },
			{ type: CoordType.Linear, x: 25, y: 25 },
			{ type: CoordType.Linear, x: 25 },
		];
		expect(parser.validateCoordinates(coords)).toBeFalsy();
	});

	test('CoordinateParser reject validation with coorect coords count but with extra y', () => {
		const coords = [
			{ type: CoordType.Linear, x: 25, y: 25 },
			{ type: CoordType.Linear, x: 25, y: 25 },
		];
		expect(parser.validateCoordinates(coords)).toBeFalsy();
	});

	test('CoordinateParser approve validation with coorect coords', () => {
		const coords = [
			{ type: CoordType.Linear, x: 25, y: 25 },
			{ type: CoordType.Linear, x: 25 },
		];
		expect(parser.validateCoordinates(coords)).toBeTruthy();
	});

	test('CoordinateParser should render element attrs correctly', () => {
		const coords = [
			{ type: CoordType.Linear, x: 50, y: 75 },
			{ type: CoordType.Linear, x: 100 },
		];
		expect(parser.createElementAttrs(coords)).toEqual({
			cx: 50,
			cy: 75,
			r: 100,
		});
	});
});

describe('test Ellipse CoordinateParser', () => {
	const parser: CoordsToElemAttrs = CoordsToElemAttrsMap['ellipse'];

	test('CoordinateParser reject validation with too many coords', () => {
		const coords = [
			{ type: CoordType.Linear, x: 25, y: 25 },
			{ type: CoordType.Linear, x: 25, y: 25 },
			{ type: CoordType.Linear, x: 25, y: 25 },
		];
		expect(parser.validateCoordinates(coords)).toBeFalsy();
	});

	test('CoordinateParser reject validation with not enough coords', () => {
		const coords = [{ type: CoordType.Linear, x: 25, y: 25 }];
		expect(parser.validateCoordinates(coords)).toBeFalsy();
	});

	test('CoordinateParser approve validation with coorect coords', () => {
		const coords = [
			{ type: CoordType.Linear, x: 25, y: 25 },
			{ type: CoordType.Linear, x: 25, y: 25 },
		];
		expect(parser.validateCoordinates(coords)).toBeTruthy();
	});

	test('CoordinateParser should render element attrs correctly', () => {
		const coords = [
			{ type: CoordType.Linear, x: 25, y: 200 },
			{ type: CoordType.Linear, x: 50, y: 100 },
		];
		expect(parser.createElementAttrs(coords)).toEqual({
			cx: 25,
			cy: 200,
			rx: 50,
			ry: 100,
		});
	});
});

describe('test Polyline CoordinateParser', () => {
	const parser: CoordsToElemAttrs = CoordsToElemAttrsMap['polyline'];

	test('CoordinateParser approve having coords', () => {
		const coords = [
			{ type: CoordType.Linear, x: 25, y: 25 },
			{ type: CoordType.Linear, x: 25, y: 25 },
		];
		expect(parser.validateCoordinates(coords)).toBeTruthy();
	});

	test('CoordinateParser approve not having coords at all', () => {
		expect(parser.validateCoordinates([])).toBeTruthy();
	});

	test('CoordinateParser should render element attrs correctly with UnlimitedPoints renderer', () => {
		const coords = [
			{ type: CoordType.Linear, x: 25, y: 200 },
			{ type: CoordType.Linear, x: 50, y: 100 },
			{ type: CoordType.Linear, x: 75, y: 500 },
		];
		expect(parser.createElementAttrs(coords)).toEqual({
			points: [25, 200, 50, 100, 75, 500],
		});
	});
});

describe('Test path CoordinateParser', () => {
	const parser: CoordsToElemAttrs = CoordsToElemAttrsMap['path'];
	const coords = [
		{ type: CoordType.Linear, x: 5, y: 5, move: true } as Coord,
		{ type: CoordType.Linear, x: 25, y: 25 } as Coord,
		{
			type: CoordType.BezierCubic,
			x: 45,
			y: 25,
			ctrlX: 30,
			ctrlY: 55,
			ctrlX2: 40,
			ctrlY2: 50,
		} as CubicBezierCoord,
		{
			type: CoordType.BezierQuadratic,
			x: 100,
			y: 200,
			ctrlX: 110,
			ctrlY: 190,
		} as QuadraticBezierCoord,
	];

	test('CoordinateParser approve having coords', () => {
		expect(parser.validateCoordinates(coords)).toBeTruthy();
	});

	test("CoordinateParser should render Path Element's d attribute correctly", () => {
		expect(parser.createElementAttrs(coords)).toEqual({
			d: 'M5,5 L25,25 C30,55,40,50,45,25 Q110,190,100,200',
		});
	});
});
