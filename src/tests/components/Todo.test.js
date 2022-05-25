import React from 'react';
import { shallow, mount } from 'enzyme';
import Todo from '../../components/Todo';

describe("Todo test validation",()=>{
  test('state should be true or false', () => {
    const todo = { id:Math.random().toString,
      state:false || true,
      description:"Lorem ipsum dolo",
      title:"title two"}
    const wrapper = shallow(<Todo todo={todo}/>);
    const input = wrapper.find('input');
    expect(input.props().defaultChecked).toEqual(todo.state);
});
test('title should be defined', () => {
    const todo = { id:Math.random().toString,
      state:false,
      description:"Lorem ipsum dolo",
      title:"title two"}
    const wrapper = shallow(<Todo todo={todo}/>);
    const input = wrapper.find('span');
    expect(input.text()).toEqual("title two");
    const todo2 = { id:Math.random().toString,
      state:false,
      description:"Lorem ipsum dolo",
      title:"title uknow"}
      const wrapper2 = shallow(<Todo todo={todo2}/>);
    const input2 = wrapper2.find('span');
      expect(input2.text()).toEqual("title uknow");
      const todo3 = { id:Math.random().toString,
        state:false,
        description:"Lorem ipsum dolo",
        title:""}
        const wrapper3 = shallow(<Todo todo={todo3}/>);
      const input3 = wrapper3.find('span');
        expect(input3.text()).not.toBeNull();
});
})