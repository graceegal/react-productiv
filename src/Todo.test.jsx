import { describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";

import Todo from "./Todo";

describe('Todo', function () {
    const testTodo = { id: 1, title: 'test', description: 'testing', priority: 1 };

    // don't necessarily need below test for div rendering bc react testing
    // doesn't normally test for html components... check for actual stuff on page user sees
    it('renders a todo div', function () {
        const { debug, container } = render(<Todo todo={testTodo} />);
        debug();

        const renderedTodo = container.querySelector('div[id="1"]');
        expect(renderedTodo).toBeInTheDocument();
    });

    it('renders with correct Todo description text', function () {
        const result = render(<Todo todo={testTodo} />);
        expect(result.queryByText("testing")).toBeInTheDocument();
    });
});