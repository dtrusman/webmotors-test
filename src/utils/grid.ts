type GridSizes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

function smallGrid(size: GridSizes) {
  return `grid-small-${size <= 4 ? size : 4}`;
}

function mediumGrid(size: GridSizes) {
  return `grid-medium-${size <= 8 ? size : 8}`;
}

function largeGrid(size: GridSizes) {
  return `grid-large-${size}`;
}
/**
 * grid helper
 * Returns a className to adjust the element on app grid. Is possible set
 * width as columns passing until three values.
 * In case of one value, it is used for all the three grid breakpoints:
 * ```js
 * <div className={grid(4)} />
 * ```
 * In case of two values, the first is used to set the width for mobile
 * (cellphone and tablet) and the second for large screens (desktop):
 * ```js
 * <div className={grid(4, 3)} />
 * ```
 * Passing three values the width will setted by breakpoint:
 * ```js
 * <div className={grid(2, 4, 6)} />
 * ```
 *
 * @export
 * @param {GridSizes} sizeOne
 * @param {GridSizes} [sizeTwo]
 * @param {GridSizes} [sizeThree]
 * @returns {String} gridClassName
 */
export function grid(sizeOne: GridSizes, sizeTwo?: GridSizes, sizeThree?: GridSizes) {
  let smallClassName;
  let mediumClassName;
  let largeClassName;

  if (!sizeTwo && !sizeThree) {
    smallClassName = smallGrid(sizeOne);
    mediumClassName = mediumGrid(sizeOne);
    largeClassName = largeGrid(sizeOne);
  } else if (sizeTwo && !sizeThree) {
    smallClassName = smallGrid(sizeOne);
    mediumClassName = mediumGrid(sizeOne);
    largeClassName = largeGrid(sizeTwo);
  } else if (sizeTwo && sizeThree) {
    smallClassName = smallGrid(sizeOne);
    mediumClassName = mediumGrid(sizeTwo);
    largeClassName = largeGrid(sizeThree);
  }

  return `${smallClassName} ${mediumClassName} ${largeClassName}`;
}
