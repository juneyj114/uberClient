// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blueColor: string;
      greyColor: string;
      greenColor: string;
      yellowColor: string;
    };
  }
}
