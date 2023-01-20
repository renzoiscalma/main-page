import { createTheme } from "@mui/material/styles";
import AdobeCleanBold from "../media/fonts/AdobeCleanBold.otf";
import SofiaProRegular from "../media/fonts/SofiaProRegular.ttf";
const fonts = createTheme({
  typography: {
    h2: {
      fontFamily: "AdobeCleanBold, Roboto",
    },
    h3: {
      fontFamily: "AdobeCleanBold, Roboto",
    },
    h4: {
      fontFamily: "AdobeCleanBold, Roboto",
    },
    h5: {
      fontFamily: "AdobeCleanBold, Roboto",
      fontSize: "1.25rem",
    },
    h6: {
      fontFamily: "AdobeCleanBold, Roboto",
    },
    subtitle1: {
      fontFamily: "SofiaProRegular, Arial",
    },
    subtitle2: {
      fontFamily: "SofiaProRegular, Arial",
      fontSize: "1rem",
    },
    button: {
      fontFamily: "SofiaProRegular, Arial",
    },
    body2: {
      fontFamily: "SofiaProRegular, Arial",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      	@font-face {
      		font-family: 'AdobeCleanBold';
          font-style: normal;
          font-display: swap;
          font-weight: 200;
          src: local('AdobeCleanBold'), local('AdobeClean-Bold'), url(${AdobeCleanBold}) format('opentype');
      	}
				@font-face {
					font-family: 'SofiaProRegular';
          font-style: normal;
          font-display: swap;
          font-weight: 200;
          src: local('SofiaProRegular'), local('SofiaPro-Regular'), url(${SofiaProRegular}) format('truetype');
				}
      `,
    },
  },
});
export default fonts;
