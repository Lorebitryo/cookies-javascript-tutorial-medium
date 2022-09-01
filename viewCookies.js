const divSavedCookies = document.getElementById("savedCookiesDiv");
console.log(divSavedCookies);
console.log(document.cookie);

let allCookies = document.cookie.split(";");
console.log(allCookies);

divSavedCookies.innerHTML = allCookies;
