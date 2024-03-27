// Fake stock data
const stockData = [
    { symbol: "LPR", price: 245.67, change: 1.23 },
    { symbol: "SVC", price: 132.45, change: -0.87 },
    { symbol: "GLX", price: 87.21, change: 0.56 },
    { symbol: "NVA", price: 312.89, change: 2.34 },
    { symbol: "ZTX", price: 56.78, change: -1.12 }
];

// Function to display stock data
function displayStocks() {
    const stockList = document.getElementById("stock-list");
    stockList.innerHTML = "";

    for (const stock of stockData) {
        const listItem = document.createElement("li");
        listItem.textContent = `${stock.symbol}: $${stock.price.toFixed(2)} (${stock.change > 0 ? "+" : ""}${stock.change.toFixed(2)})`;
        stockList.appendChild(listItem);
    }
}

// Call displayStocks function when the page loads
window.addEventListener("load", displayStocks);
