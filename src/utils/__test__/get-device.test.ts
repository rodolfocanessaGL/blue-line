import getDevice, { Devices } from '../get-device';

describe('Utils - getDevice', () => {
  it('XS', () => {
    const windowWidth = 319;
    const expected = Devices.XS;
    const result = getDevice(windowWidth);

    expect(expected).toEqual(result);
  });

  it('SM', () => {
    const windowWidth = 719;
    const expected = Devices.SM;
    const result = getDevice(windowWidth);

    expect(expected).toEqual(result);
  });

  it('MD', () => {
    const windowWidth = 1023;
    const expected = Devices.MD;
    const result = getDevice(windowWidth);

    expect(expected).toEqual(result);
  });

  it('LG', () => {
    const windowWidth = 1025;
    const expected = Devices.LG;
    const result = getDevice(windowWidth);

    expect(expected).toEqual(result);
  });
});
