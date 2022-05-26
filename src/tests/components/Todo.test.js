import React from 'react';
import { shallow} from 'enzyme';
import Todo from '../../components/Todo';

describe("Todo test validation",()=>{
  test('state should be true or false', () => {
    const todo = { id: "dsqfdsqfds",
      state:false || true,
      description:"Lorem ipsum dolo",
      title:"title two"}
    const wrapper = shallow(<Todo todo={todo}/>);
    const input = wrapper.find('input');
    expect(input.props().defaultChecked).toEqual(todo.state);
});
test('title should be defined', () => {
    const todo = { id:"rezareza",
      state:false,
      description:"Lorem ipsum dolo",
      title:"title two"}
    const wrapper = shallow(<Todo todo={todo}/>);
    const input = wrapper.find('span');
    expect(input.text()).toEqual("title two");
    const todo2 = { id:"rezareza",
      state:false,
      description:"Lorem ipsum dolo",
      title:"title uknow"}
      const wrapper2 = shallow(<Todo todo={todo2}/>);
    const input2 = wrapper2.find('span');
      expect(input2.text()).toEqual("title uknow");
      const todo3 = { id:"fdsqfdqs",
        state:false,
        description:"Lorem ipsum dolo",
        title:""}
        const wrapper3 = shallow(<Todo todo={todo3}/>);
      const input3 = wrapper3.find('span');
        expect(input3.text()).not.toBeNull();
});

test('confirm a checkBox element with toggle', () => {
  const wrapperNoprops = shallow(<Todo/>);
  expect(wrapperNoprops.find('input')).toHaveLength(1);
});
test('should test TodoItem component', () => {
  const wrapper = shallow(<Todo/>);
  expect(wrapper).toMatchSnapshot();
});
})