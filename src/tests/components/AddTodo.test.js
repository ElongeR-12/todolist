import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '../../components/AddTodo';
import { fireEvent, render, screen } from '@testing-library/react';
describe("AddTodo test",()=>{
    test('should test AddTodo component', () => {
        const wrapper = shallow(<AddTodo/>);
        expect(wrapper).toMatchSnapshot();
      });
    test("get input", ()=>{
      render(<AddTodo/>);
      const inputElemment = screen.getAllByRole('textbox')
      expect(inputElemment.length).toBe(2)
    })
    test("get change when typing in input title", ()=>{
      render(<AddTodo/>);
      const inputElemment = screen.getByPlaceholderText(/enter a title.../i)
      fireEvent.change(inputElemment, {target:{value: "Add a todo title"}})
      expect(inputElemment.value).toBe("Add a todo title")
    })
    test("get change when typing in input description", ()=>{
      render(<AddTodo/>);
      const inputElemment = screen.getByPlaceholderText(/enter a description.../i)
      fireEvent.change(inputElemment, {target:{value: "Add a todo description"}})
      expect(inputElemment.value).toBe("Add a todo description")
    })
    test("empty input value when clicking add button", ()=>{
      render(<AddTodo/>);
      const inputTitleElemment = screen.getByPlaceholderText(/enter a description.../i)
      const inputDescriptionElemment = screen.getByPlaceholderText(/enter a title.../i)
      const button = screen.getByText(/add todo/i)
      fireEvent.click(button)
      expect(inputDescriptionElemment.value).toBe("")
      expect(inputTitleElemment.value).toBe("")
    })
})