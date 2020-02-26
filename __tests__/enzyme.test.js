import App from '../client/App.jsx';
import GenerateTest from '../client/Components/GenerateTest.jsx';
import TestInput from '../client/Components/TestInput.jsx';
import TestQuery from '../client/Components/TestQuery.jsx';
import MutationTestInput from "../client/Components/MutationTestInput.jsx"
import LeftSideBar from "../client/Components/LeftSideBar.jsx"
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

//enzyme configuration
configure({ adapter: new Adapter()});

//testing App component
describe('testing App component', () => {
   let wrapper;
   beforeAll(() => { wrapper = shallow(<App />);});
   it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
   });
});

// testing Generate Test for Queries
describe('testing Generate Test component', () => {
   let wrapper;
   const props = {
    testDescription: 'test description',
    testSuiteName: 'test suite name',
    value: 'random value'
   }
   beforeAll(() => { wrapper = shallow(<GenerateTest {...props}/>) });
   it('Snapshot testing', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
   it('contains a form with 2 buttons', () => {
      expect(wrapper.find('Button')).toHaveLength(2);
   });
});

// testing for TestInput
describe('testing Test Input component', () => {
   let wrapper;
   beforeAll(() => { wrapper = shallow(<TestInput/>) })

   it('snapshot testing', () => {
      expect(wrapper).toMatchSnapshot();
   })
    it('has 7 options within dropdown', () => {
      expect(wrapper.find('option')).toHaveLength(7);
   })
})


// test for TestQuery
describe('testing TestQuery component', () => {
   let wrapper;
   beforeAll(() => { wrapper = shallow(<TestQuery />)});

   it('Snapshot testing', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })

   it('should render a form for write query', () => {
      expect(wrapper.find('div.writeQueryBox').exists()).toBe(true);
   })
})

// test for MutationTestInput 
describe('testing MutationTestInput component', () => {
  let wrapper;
  beforeAll(() => { wrapper = shallow(<MutationTestInput />)});
  it('should render a form for write query', () => {
     expect(wrapper.find('div.testInputContainer').exists()).toBe(true);
  })
})

//test for leftSideBar 
describe('testing for leftSideBar', () => {
  let wrapper; 
  beforeAll(() => { wrapper = shallow(< LeftSideBar/>)});
  it('Snapshot testing', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  it('should render a button toolbar with 4 buttons', () => {
    expect(wrapper.find('div.mainNavBar').exists()).toBe(true);
    expect(wrapper.find('Button')).toHaveLength(4);
  })
})