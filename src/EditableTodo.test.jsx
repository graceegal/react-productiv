import { describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";

import EditableTodo from "./EditableTodo";

describe('Editable Todo', function () {

    it('shows edit and delete button', function () {
        const { container } = render(<EditableTodo />)
    });
});