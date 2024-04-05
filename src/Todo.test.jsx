import { describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";

import Todo from "./Todo";

describe('Todo', function () {
    const testTodo = { id: 1, title: 'test', description: 'testing', priority: 1 };

    it('renders a todo', function () {
        const { debug, container } = render(<Todo todo={testTodo} />);

        const renderedTodo = container.querySelector('div[id="1"]');
        console.log(renderedTodo);
        debug();
        expect(renderedTodo).toBeInTheDocument();
    });
});