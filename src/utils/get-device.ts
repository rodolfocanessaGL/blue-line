export enum Devices {
  XS = 320,
  SM = 720,
  MD = 1024,
  LG
};

const getDevice = (width: number = window.innerWidth): Devices => {
  if (width < Devices.XS) {
    return Devices.XS;
  } else if (width >= Devices.XS && width < Devices.SM) {
    return Devices.SM;
  } else if (width >= Devices.SM && width < Devices.MD) {
    return Devices.MD;
  } else {
    return Devices.LG;
  }
};

export default getDevice;
