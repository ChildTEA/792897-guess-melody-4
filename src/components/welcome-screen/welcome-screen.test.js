import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const ERRORS_COUNT = 3;

describe(`<WelcomeScreen /> `, () => {
  it(`Should WelcomeScreen render correctly`, () => {
    const tree = renderer
      .create(<WelcomeScreen
        errorsCount={ERRORS_COUNT}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
