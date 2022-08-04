let month = prompt("Please enter your month of birth (numbers 1-12)");
let date = prompt("Please enter your date of birth (numbers 1-31)");

if ((month == 1 && date >= 20 && date <= 31) || (month == 2 && date <= 19)) {
  alert("Your zodiac is Aquarius");
} else if (
  (month == 2 && date >= 20 && date <= 29) ||
  (month == 3 && date <= 20)
) {
  alert("Your zodiac is Piesces");
} else if (
  (month == 3 && date >= 21 && date <= 31) ||
  (month == 4 && date <= 20)
) {
  alert("Your zodiac is Aries");
} else if (
  (month == 4 && date >= 21 && date <= 30) ||
  (month == 5 && date <= 20)
) {
  alert("Your zodiac is Taurus");
} else if (
  (month == 5 && date >= 21 && date <= 30) ||
  (month == 6 && date <= 20)
) {
  alert("Your zodiac is Gemini");
} else if (
  (month == 6 && date >= 21 && date <= 30) ||
  (month == 7 && date <= 22)
) {
  alert("Your zodiac is Cancer");
} else if (
  (month == 7 && date >= 23 && date <= 31) ||
  (month == 8 && date <= 22)
) {
  alert("Your zodiac is Leo");
} else if (
  (month == 8 && date >= 23 && date <= 31) ||
  (month == 9 && date <= 22)
) {
  alert("Your zodiac is Virgo");
} else if (
  (month == 9 && date >= 23 && date <= 30) ||
  (month == 10 && date <= 22)
) {
  alert("Your zodiac is Libra");
} else if (
  (month == 10 && date >= 23 && date <= 31) ||
  (month == 11 && date <= 22)
) {
  alert("Your zodiac is Scorpio");
} else if (
  (month == 11 && date >= 23 && date <= 30) ||
  (month == 12 && date <= 21)
) {
  alert("Your zodiac is Sagittarius");
} else if (
  (month == 12 && date >= 22 && date <= 31) ||
  (month == 1 && date <= 19)
) {
  alert("Your zodiac is Capricorn");
} else {
  alert(
    "Something went wrong, please double check if you entered month and date correctly."
  );
}
