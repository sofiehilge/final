// import BaseMapTemplate from "../components/Map/BaseMapTemplate";
import { AppWrapper, AppHeader, AppBody, AppBodyLayout } from "../styles/LayoutStyles";
import Navigation from "../components/Navigation/Navigation";

import LayerSwitcherMap from "../components/LayerSwitcherMap/LayerSwitcherMap";
import BackgroundImage from "../components/Map/BackgroundImage";

const Firstmap = () => {
  return (
    <>
      <AppWrapper>
        <AppHeader>
          <Navigation />
        </AppHeader>
        <AppBody>
          <AppBodyLayout>
            <LayerSwitcherMap />
            <BackgroundImage />
          </AppBodyLayout>
        </AppBody>
      </AppWrapper>
    </>
  );
};

export default Firstmap;
