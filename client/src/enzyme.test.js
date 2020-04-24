import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import App from "../App.jsx";
import GenerateTest from "../Components/GenerateTest.jsx";
import TestInput from "../Components/TestInput.jsx";
import TestSuites from "../Components/TestSuites.jsx";
import TestQuery from "../Components/TestQuery.jsx";

Enzyme.configure({ adapter: new Adapter() });

// testing App component
describe("testing App component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it("renders without crashing", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("links back to the intro page", () => {
    expect(wrapper.find("Link").prop("to")).toEqual("/main");
  });
});

// testing Generate Test for Queries
describe("testing Generate Test component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<GenerateTest />);
  });

  it("contains a form with 2 buttons", () => {
    expect(wrapper.find("Form").find("Button")).toHaveLength(2);
  });

  it("has 7 options within dropdown", () => {
    expect(wrapper.find("option")).toHaveLength(7);
  });
});

// testing for TestInput
describe("testing Test Input component", () => {
  let wrapper;
  const props = {
    testDescription: "test description",
    onChange: jest.fn(),
    testSuiteName: "test suite name",
    value: "random value",
  };
  beforeAll(() => {
    wrapper = shallow(<TestInput {...props} />);
  });

  // need to test this
  it("snapshot testing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // iffy about this test may need refactoring
  it("simulates a mock onchange value to test functionality", () => {
    const text = wrapper.find("Form.Control");
    expect(text.at(0).prop("value")).toEqual("test suite name");
    expect(text.at(1).prop("value")).toEqual("test description");
  });
});

// test for Test Suites
describe("testing Test Suite component", () => {
  let wrapper;
  const props = {
    editTest: jest.fn(),
    deleteTest: jest.fn(),
  };

  beforeAll(() => {
    wrapper = shallow(<TestSuites {...props} />);
  });

  it("should fire onclick when button is pressed", () => {
    const buttonArray = wrapper.find("Button");
    buttonArray.forEach((button) => button.simulate("click"));
    expect(props.editTest).toHaveBeenCalled();
    expect(props.deleteTest).toHaveBeenCalled();
  });

  it("should have H3 element to display Test Suites", () => {
    let h3 = wrapper.find("h3");
    expect(h3.text()).toBe("Test Suites");
  });
});

// test for TestQuery
describe("testing TestQuery component", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<TestQuery />);
  });

  it("should render 2 Form Groups for write query and select query", () => {
    expect(wrapper.find("Form.Group").getElements()).toHaveLength(2);
  });
});
