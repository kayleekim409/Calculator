onEvent("button1", "click", function( ) {
  setScreen("screen2");
});
onEvent("button2", "click", function( ) {
  setText("label5", getText("text_input1") * getText("text_input2"));
});
onEvent("button3", "click", function( ) {
  setText("label5", getText("text_input1") / getText("text_input2"));
});
onEvent("button5", "click", function( ) {
  setText("label5", getText("text_input1") - getText("text_input2"));
});
onEvent("button4", "click", function( ) {
  setNumber("label5", getNumber("text_input1") + getNumber("text_input2"));
});
