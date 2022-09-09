//Here we're importing items we'll need. You can add other imports here.
import { helloModuleFunction } from "./modules/hello.js";
//The first function. Remove this.
const btn = document.querySelector("button");
btn.onclick = function () {
  alert("You ran some JavaScript");
};

//

window.onload = function () {
  const later = () => {
    console.log("calling FileMaker Script");

    FileMaker.PerformScriptWithOption("SessionReady", "", "0");
    helloModuleFunction();
  };
  setTimeout(later, 1000);
};
