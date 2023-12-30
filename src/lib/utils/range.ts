export function range(start: number, end: number, step: number = 1): number[] {
  const length = Math.floor((end - start) / step) + 1;
  return Array.from({ length }, (_, index) => start + index * step);
}
