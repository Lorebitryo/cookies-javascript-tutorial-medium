const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", (e) => {
  document.cookie = "name=value";
});
