const divSavedCookies = document.getElementById("savedCookiesDiv");
let allCookies = document.cookie.split(";");
divSavedCookies.innerHTML = allCookies;
