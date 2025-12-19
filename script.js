const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const result = document.getElementById("result");
const button = document.getElementById("convert");

const currencies = ["USD", "EUR", "INR", "GBP", "JPY", "AUD"];

// Populate dropdowns
currencies.forEach((currency) => {
  const option1 = document.createElement("option");
  option1.value = currency;
  option1.textContent = currency;

  const option2 = option1.cloneNode(true);

  fromSelect.appendChild(option1);
  toSelect.appendChild(option2);
});

fromSelect.value = "USD";
toSelect.value = "INR";

button.addEventListener("click", convertCurrency);

async function convertCurrency() {
  const amount = amountInput.value;

  if (amount === "" || amount <= 0) {
    result.textContent = "Please enter a valid amount";
    result.style.color = "red";
    return;
  }

  const from = fromSelect.value;
  const to = toSelect.value;

  try {
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
    );

    const data = await response.json();
    const converted = data.rates[to];

    result.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
    result.style.color = "green";
  } catch (error) {
    result.textContent = "Error fetching exchange rate";
    result.style.color = "red";
  }
}
