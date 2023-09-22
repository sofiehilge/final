import { AppBody, AppBodyLayout, AppHeader, AppWrapper } from "../styles/LayoutStyles";
import Navigation from "../components/Navigation/Navigation";
import BingMap from "../components/Map/BingMap";

const ThirdMap = () => {
  return (
    <>
      <AppWrapper>
        <AppHeader>
          <Navigation />
        </AppHeader>
        <AppBody>
          <AppBodyLayout>
            <BingMap />
          </AppBodyLayout>
        </AppBody>
      </AppWrapper>
    </>
  );
};

export default ThirdMap;
