const ONE_DAY_MILLISECONDS = 24 * 60 * 60 * 1000;
const saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", () => {
  let cookieName = document.getElementById("name").value;
  let cookieValue = document.getElementById("value").value;
  setCookies(cookieName, cookieValue, 1);
});

const setCookies = (cookieName, cookieValue, days) => {
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + days * ONE_DAY_MILLISECONDS
  );
  document.cookie = `${cookieName}=${cookieValue}; expires=${expirationDate}`;
};
