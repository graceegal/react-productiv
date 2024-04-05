import {describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import { v4 as uuid } from "uuid";

import App from "./App";
import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";


describe("Todo app", function () {
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
});