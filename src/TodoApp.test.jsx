import { describe, it, expect } from "vitest";

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { v4 as uuid } from "uuid";

import App from "./App";
import TopTodo from "./TopTodo";
import TodoApp from "./TodoApp";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";


describe("Todo app", function () {
    const testTodo = [{ id: 1, title: 'test', description: 'testing', priority: 1 }];

    it("always contains Todos, Top Todo and Add new-Todo-form headers on app page", function () {
        const { debug, container } = render(<App />);
        // debug();

        const todoList = container.querySelector('.TodoList');
        const topTodo = container.querySelector('.TopTodo');
        const todoForm = container.querySelector('.TodoForm');

        expect(todoList).toBeInTheDocument();
        expect(topTodo).toBeInTheDocument();
        expect(todoForm).toBeInTheDocument();
    });

    it('Number of todos accurate', function () {
        const { debug, container } = render(<TodoApp initialTodos={testTodo}/>);

        const todos = container.querySelectorAll('.Todo');
        expect(todos.length).toEqual(2);
    });


});