import { MARTALines } from "./MARTALines";
import { MTALines } from "./MTALines";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseLine, selectLine, selectSystem } from "../app/appstateSlice";
import { Button } from "react-bootstrap";
import "../css/Lines.css";

const Line = function () {
  const dispatch = useDispatch();
  const current_line = useSelector(selectLine);
  const system = useSelector(selectSystem);

  let arr = [];

  let lines = [];
  if (system === "MTA") {
    lines = MTALines;
  } else {
    lines = MARTALines;
  }

  lines.forEach((element) =>
    arr.push(
      <Button
        id="line-button"
        onClick={() => {
          dispatch(chooseLine(element.name));
        }}
        style={{
          "background-color": element.color,
          opacity:
            current_line !== null && current_line !== element.name ? 0.5 : 1,
        }}
      >
        {element.displayName}
      </Button>
    )
  );

  if (current_line) {
    let extra = [
      {
        name: "",
        color: "",
      },
    ];
    lines.forEach((element) => {
      if (element.name === current_line) {
        extra.name = element.displayName;
        extra.color = element.color;
      }
    });

    return (
      <div>
        <div
          className="container"
          style={{
            gridTemplateColumns:
              lines.length < 6
                ? "repeat(" + lines.length + ", min(13vw, 80px))"
                : "repeat(6, min(13vw, 80px))",
          }}
        >
          {arr}
        </div>
        <Button
          id="line-button"
          disabled={true}
          style={{
            "background-color": extra.color,
            width: "min(11vw,80px)",
            height: "min(11vw, 80px)",
            marginLeft: "43%",
            marginRight: "auto",
          }}
        >
          {extra.name}
        </Button>
      </div>
    );
  }

  return (
    <div
      className="container"
      style={{
        gridTemplateColumns:
          lines.length < 6
            ? "repeat(" + lines.length + ", min(13vw, 80px))"
            : "repeat(6, min(13vw, 80px))",
      }}
    >
      {arr}
    </div>
  );
};

export default Line;
