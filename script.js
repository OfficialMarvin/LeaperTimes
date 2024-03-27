// Fake stock data
const stockData = [
    { symbol: "LPR", price: 245.67, change: 1.23 },
    { symbol: "SVC", price: 132.45, change: -0.87 },
    { symbol: "GLX", price: 87.21, change: 0.56 },
    { symbol: "NVA", price: 312.89, change: 2.34 },
    { symbol: "ZTX", price: 56.78, change: -1.12 }
];

// Function to display stock data in a banner
function displayStockBanner() {
    const stockBanner = document.getElementById("stock-banner");
    let stockText = "";

    for (const stock of stockData) {
        stockText += `${stock.symbol}: $${stock.price.toFixed(2)} (${stock.change > 0 ? "+" : ""}${stock.change.toFixed(2)}) | `;
    }

    stockBanner.textContent = stockText;
}

// Function to display stock data in a table
function displayStockTable() {
    const stockTable = document.getElementById("stock-table");
    let tableHTML = `
        <table>
            <tr>
                <th>Symbol</th>
                <th>Price</th>
                <th>Change</th>
            </tr>
    `;

    for (const stock of stockData) {
        tableHTML += `
            <tr>
                <td>${stock.symbol}</td>
                <td>$${stock.price.toFixed(2)}</td>
                <td>${stock.change > 0 ? "+" : ""}${stock.change.toFixed(2)}</td>
            </tr>
        `;
    }

    tableHTML += `</table>`;
    stockTable.innerHTML = tableHTML;
}

// Call displayStockBanner and displayStockTable functions when the page loads
window.addEventListener("load", function() {
    if (document.getElementById("stock-banner")) {
        displayStockBanner();
    }
    if (document.getElementById("stock-table")) {
        displayStockTable();
    }
});
