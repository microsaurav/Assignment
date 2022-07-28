function getUrlParameterValue(url, parameter) {
  const paramValue = new URLSearchParams(url.split("?")?.[1] ?? "").get(
    parameter
  );
  return paramValue ?? "";
}

let url =
  "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
console.log(getUrlParameterValue(url, "utm_campaign"));

function reverseString(num) {
  return +num.toString().split("").reverse().join("");
}
console.log(reverseString(149));
