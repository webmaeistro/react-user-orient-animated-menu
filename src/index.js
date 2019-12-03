import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import ResizeObserver from "resize-observer-polyfill";
import { ToggleLayer } from "react-laag";
import { ITEM_SIZE, MARGIN_RIGHT } from "./constants";

/**
 * Icons
 */

import { Image } from "styled-icons/boxicons-regular/Image";
import { PlayCircle as Video } from "styled-icons/boxicons-regular/PlayCircle";
import { Music } from "styled-icons/boxicons-solid/Music";
import { File } from "styled-icons/boxicons-regular/File";
import { LocationOn as Location } from "styled-icons/material/LocationOn";
import { Code } from "styled-icons/boxicons-regular/Code";

/**
 * Components
 */

import Button from "./Button";
import Menu from "./Menu";

/**
 * Main
 */

function Example() {
  return (
    <div>
      <ToggleLayer
        ResizeObserver={ResizeObserver}
        placement={{
          anchor: "CENTER",
          autoAdjust: true,
          snapToAnchor: true,
          triggerOffset: 12,
          possibleAnchors: [
            "TOP_CENTER",
            "BOTTOM_CENTER",
            "LEFT_CENTER",
            "RIGHT_CENTER"
          ],
          layerDimensions: layerSide => {
            return {
              width:
                layerSide === "center" ? 200 : (ITEM_SIZE + MARGIN_RIGHT) * 6,
              height: layerSide === "center" ? 200 : ITEM_SIZE
            };
          }
        }}
        renderLayer={({ isOpen, layerProps, close, layerSide }) => {
          return (
            <Menu
              close={close}
              ref={layerProps.ref}
              style={layerProps.style}
              layerSide={layerSide}
              isOpen={isOpen}
              items={[
                { Icon: Image, value: "image", label: "Image" },
                { Icon: Video, value: "video", label: "Video" },
                { Icon: Music, value: "music", label: "Music" },
                { Icon: File, value: "file", label: "File" },
                { Icon: Location, value: "location", label: "Location" },
                { Icon: Code, value: "code", label: "Code" }
              ]}
            />
          );
        }}
      >
        {({ triggerRef, toggle, isOpen }) => (
          <Button
            ref={triggerRef}
            onClick={toggle}
            isOpen={isOpen}
            style={{ margin: 256 }}
          />
        )}
      </ToggleLayer>
      <div style={{ width: 3000, height: 3000 }} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
