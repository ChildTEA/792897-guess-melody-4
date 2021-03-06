import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

const ERRORS_COUNT = 3;

describe(`<App />`, () => {
  it(`Should WelcomeScreen render correctly`, () => {
    const tree = renderer
      .create(<WelcomeScreen
        errorsCount={ERRORS_COUNT}
        onWelcomeButtonClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
