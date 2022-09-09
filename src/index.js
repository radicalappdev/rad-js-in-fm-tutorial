//Here we're importing items we'll need. You can add other imports here.

//The first function. Remove this.
const btn = document.querySelector("button");
btn.onclick = function () {
  alert("You ran some JavaScript");
};

//

function myFunc() {
  console.log("calling myFunc");
  const later = () => {
    console.log("calling FileMaker Script");

    FileMaker.PerformScriptWithOption("FM_Later", "", "0");
  };
  setTimeout(later, 1000);
}

window.myFunc = myFunc;

window.onload = function () {
  const later = () => {
    console.log("calling FileMaker Script");

    FileMaker.PerformScriptWithOption("SessionReady", "", "0");
  };
  setTimeout(later, 1000);
};
