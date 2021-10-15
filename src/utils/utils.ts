export function _randomId(): string {
  let outString = '';
  const inOptions = '0123456789abcdef';

  for (let i = 0; i < 24; i++) {
    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
  }

  return outString;
}
