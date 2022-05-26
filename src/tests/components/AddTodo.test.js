import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '../../components/AddTodo';
describe("AddTodo test",()=>{
    test('should test AddTodo component', () => {
        const wrapper = shallow(<AddTodo/>);
        expect(wrapper).toMatchSnapshot();
      });
})