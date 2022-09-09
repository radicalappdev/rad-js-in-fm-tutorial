// I'm using this file to create window-level functions tha FileMaker scripts can call
// Think of this as an incoming message file

const myFunc = () => {
  console.log("calling myFunc");
  const later = () => {
    console.log("calling FileMaker Script");

    FileMaker.PerformScriptWithOption("FM_Later", "", "0");
  };
  setTimeout(later, 1000);
};

let radMessages = {};
radMessages.myFunc = myFunc;

window.radMessages = radMessages;
