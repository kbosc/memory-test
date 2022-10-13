import React from "react"
import { ThemeProvider } from "styled-components";
import { render, screen, fireEvent } from "@testing-library/react"
import { test, expect } from "vitest"
import Modal from "./index"
import { Provider } from "react-redux";
import { createStore } from "../../store/store";
import { ThemeDefault } from '../../assets/styles/theme';


test("Modal: should be vanish button after clicked", () => {
    render(
        <ThemeProvider theme={ThemeDefault}>
            <Provider store={createStore()}>
                <Modal />
            </Provider>
        </ThemeProvider>
    )
    const launchGameButton = screen.getByText(/Jouer/i);
    fireEvent.click(launchGameButton);
    expect(launchGameButton).toBeInTheDocument()
})