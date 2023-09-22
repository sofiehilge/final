import { AppBody, AppBodyLayout, AppHeader, AppWrapper } from "../styles/LayoutStyles";
import Navigation from "../components/Navigation/Navigation";
import DrawMap from "../components/Map/DrawMap";

const SecondMap = () => {
  return (
    <>
      <AppWrapper>
        <AppHeader>
          <Navigation />
        </AppHeader>
        <AppBody>
          <AppBodyLayout>
            <DrawMap />
          </AppBodyLayout>
        </AppBody>
      </AppWrapper>
    </>
  );
};

export default SecondMap;
