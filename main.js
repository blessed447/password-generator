const ps = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "1234567890",
  symbols: "!@#$%^&*()",
};

const passwordLength = document.querySelector(".password-length input");
const passwordDetails = document.querySelector(
  ".password-length .details span"
);
const passwordIndicator = document.querySelector(".indicator");
const passwordInput = document.querySelector(".input-box input");
const copyButton = document.querySelector(".input-box span");

const randomInteger = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));

const updatePasswordIndicator = (l) => {
  passwordDetails.textContent = l;
  passwordIndicator.classList.remove("strong", "medium");
  if (l >= 16) passwordIndicator.classList.add("strong");
  else if (l >= 8) passwordIndicator.classList.add("medium");
};

const generatePassword = () => {
  const length = +passwordLength.value;
  passwordDetails.textContent = length;
  updatePasswordIndicator(length);
  let passString = ps.lowercase;

  if (uppercase.checked) passString = passString + ps.uppercase;
  if (numbers.checked) passString = passString + ps.numbers;
  if (symbols.checked) passString = passString + ps.symbols;
  let randowPassword = "";

  for (let i = 0; i < length; i++) {
    let random = randomInteger(0, passString.length - 1);
    randowPassword += passString[random];
  }
  passwordInput.value = randowPassword;
};

passwordLength.oninput = generatePassword;
document.querySelector(".generate-btn").onclick = generatePassword;
generatePassword();
