import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "height": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "body": {
        "backgroundColor": "#000",
        "fontFamily": "Arial, sans-serif",
        "height": "100%",
        "boxSizing": "border-box",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "chatbox": {
        "maxWidth": 600,
        "height": "100%",
        "maxHeight": 700,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "backgroundColor": "#222222",
        "display": "flex",
        "WebkitBoxOrient": "vertical",
        "WebkitBoxDirection": "normal",
        "MsFlexDirection": "column",
        "flexDirection": "column"
    },
    "chatbox-messageArea": {
        "backgroundColor": "#333333",
        "WebkitBoxFlex": 1,
        "MsFlexPositive": 1,
        "flexGrow": 1
    },
    "chatbox-messageArea > message": {
        "marginTop": 5,
        "marginRight": 3,
        "marginBottom": 5,
        "marginLeft": 3
    },
    "chatbox-inputArea": {
        "borderTop": "2px solid #aaa",
        "height": 100,
        "display": "flex",
        "WebkitBoxOrient": "horizontal",
        "WebkitBoxDirection": "normal",
        "MsFlexDirection": "row",
        "flexDirection": "row"
    },
    "chatbox-inputArea > messageInput": {
        "border": "none",
        "WebkitBoxFlex": 1,
        "MsFlexPositive": 1,
        "flexGrow": 1,
        "fontSize": "120%"
    },
    "chatbox-inputArea > send": {
        "width": 100,
        "backgroundColor": "#111111",
        "color": "#888888",
        "fontSize": 16,
        "border": "none"
    },
    "p": {
        "color": "#898989"
    }
});