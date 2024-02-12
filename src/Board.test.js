import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

describe("<Board /> rendering", function () {
  describe("inital board state", function () {
    it("renders without crashing", function () {
      render(<Board />);
    });

    it("matches snapshot for full board", function () {
      const { asFragment } = render(<Board chanceLightStartsOn={1} />);
      expect(asFragment()).toMatchSnapshot();
    });

    it("shows initial board state for new game", function(){
        const {getByText} = render (<Board chanceLightStartsOn = {0} />)
        expect(getByText("Start Game")).toBeInTheDocument();
    })

  });

  //NEED TO WORK ON CELL CLICK TEST
});
