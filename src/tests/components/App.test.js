import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../components/TodoList';
import App from '../../App';

describe("App test validation",()=>{
  test('should test app has div parent element with className App', () => {
    const appWrapper = shallow(<App/>);
    const wrapper = appWrapper.find('div');
    expect(wrapper.hasClass('App')).toBeTruthy()
});
test('should test app contain TodoList components', () => {
  const appWrapper = shallow(<App/>);
  const wrapper = appWrapper.find(TodoList);
  expect(wrapper).toHaveLength(1)
});
test('should test props to todoList components', () => {
  const appWrapper = shallow(<App/>);
  const wrapper = appWrapper.find(TodoList);
  expect(wrapper).toHaveProp("todos")
});
test('has state',()=>{
  const appWrapper = shallow(<App/>);
  const appState = appWrapper.state();
  expect(appState).not.toBeNull();
})
test('state lenght great than 0',()=>{
  const appWrapper = shallow(<App/>);
  const appState = appWrapper.state();
  expect(appState.todos).toHaveLength(3);
})
test('todos props of todolists should be an array of todo, and contain initial todos', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper).toMatchSnapshot();
});
  
})
