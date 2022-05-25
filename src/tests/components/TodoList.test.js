import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../../components/Todo';
import TodoList from '../../components/TodoList';
describe('list todo',()=>{
    test('should contain Todo component',()=>{
        const wrapper = shallow(<TodoList/>);
        expect(wrapper.find(Todo)).toBeTruthy()
    })
    test('shoud return on todo',()=>{
        const todo = {
            id:Math.random().toString,
            state:false,
            description:"Lorem ipsum",
            title:"title three"
        }
        const wrapper = shallow(<Todo todo={todo}/>);
        expect(wrapper).toMatchSnapshot();
    })
});