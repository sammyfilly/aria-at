window[document.currentScript.getAttribute("jsonpFunction") || "scriptsJsonpLoaded"]({
  setFocusAfterSlider(testPageDocument) {
    // sets focus on a link after the slider
    testPageDocument.getElementById('afterlink').focus();
  }
});
