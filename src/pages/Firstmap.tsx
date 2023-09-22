// import BaseMapTemplate from "../components/Map/BaseMapTemplate";
import { AppWrapper, AppHeader, AppBody, AppBodyLayout } from "../styles/LayoutStyles";
import Navigation from "../components/Navigation/Navigation";

import LayerSwitcherMap from "../components/LayerSwitcherMap/LayerSwitcherMap";

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
          </AppBodyLayout>
        </AppBody>
      </AppWrapper>
    </>
  );
};

export default Firstmap;
