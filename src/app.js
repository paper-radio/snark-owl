import _ from "lodash";
import MainUI from "./UI/MainUI";

function sayHello() {
    console.log("Hello, World!");
}

sayHello();

const ui = new MainUI();

ui.screen.render();

console.log("really");
