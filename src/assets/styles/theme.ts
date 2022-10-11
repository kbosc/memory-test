export type ThemeType = {
  colors: ColorsType,
  device: DeviceType,
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const ThemeDefault = {
  colors: {
    nightBlue: "#081448",
    nightPurple: "#282157",
    blue: "#1a2c80",
    purple: "#4a478a",
    peach: "#da8a8b",
    progressBarContainer: "#D2D1D2",
    progressBarFilledOne: "#f1c40f",
    progressBarFilledTwo: "#2c3e50",
  },
  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
  }
};

type ColorsType = {
  nightBlue: string,
  nightPurple: string,
  blue: string,
  purple: string,
  peach: string,
  progressBarContainer: string,
  progressBarFilledOne: string,
  progressBarFilledTwo: string,
};
type DeviceType = {
  mobileS: string,
    mobileM: string,
    mobileL: string,
    tablet: string,
    laptop: string,
    laptopL: string,
    desktop: string,
};