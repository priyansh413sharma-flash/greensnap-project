let coins = localStorage.getItem("greenCoins") || 0;
coins = parseInt(coins);
document.getElementById("coins").innerText = coins;

function completeTask() {
  let reward = 10;
  coins += reward;
  localStorage.setItem("greenCoins", coins);
  document.getElementById("coins").innerText = coins;
  alert(`Task completed! 🎉 You earned ${reward} Green Coins 🌿`);
}
