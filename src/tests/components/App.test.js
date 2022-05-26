import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

describe("App test validation",()=>{
  test('should test app has div parent element with className App', () => {
    const appWrapper = shallow(<App/>);
    const wrapper = appWrapper.find('div');
    expect(wrapper.hasClass('App')).toBeTruthy()
});
test('todos props of todolists should be an array of todo, and contain initial todos of arrays objects 3 lenghts', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper).toMatchSnapshot();
});
  
})
