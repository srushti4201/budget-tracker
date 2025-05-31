let totalPrice = 0;
let itemCount = 0;
let budget = 0;

function setBudget() {
  const input = document.getElementById("budget").value;
  if (input && input > 0) {
    budget = parseFloat(input);
    document.getElementById("budgetStatus").textContent = "Budget set: ₹" + budget;
  } else {
    alert("Please enter a valid budget");
  }
}

function addItemToCart(itemName, price) {
  totalPrice += price;
  itemCount++;

  document.getElementById("itemCount").textContent = itemCount;
  document.getElementById("itemCountCart").textContent = itemCount;
  document.getElementById("total").textContent = totalPrice;
}

function checkBudget() {
  if (budget === 0) {
    alert("Please set your budget first.");
    return;
  }

  let status = document.getElementById("status");
  if (totalPrice <= budget) {
    status.textContent = "✅ Within Budget";
    status.style.color = "green";
  } else {
    status.textContent = "❌ Over Budget";
    status.style.color = "red";
  }

  document.getElementById("totalDisplay").textContent = "Total: ₹" + totalPrice;
}

function resetAll() {
  totalPrice = 0;
  itemCount = 0;
  budget = 0;

  document.getElementById("budget").value = "";
  document.getElementById("itemCount").textContent = "0";
  document.getElementById("itemCountCart").textContent = "0";
  document.getElementById("total").textContent = "0";
  document.getElementById("totalDisplay").textContent = "Total: ₹0";
  document.getElementById("budgetStatus").textContent = "Status: Not set";
  document.getElementById("status").textContent = "Not checked";
  document.getElementById("status").style.color = "black";
}

