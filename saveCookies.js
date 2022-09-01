const saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", () => {
  let cookieName = document.getElementById("name").value;
  let cookieValue = document.getElementById("value").value;
  console.log(cookieName, cookieValue);
  document.cookie = `${cookieName}=${cookieValue}`;
});
