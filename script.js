function createTable() {
    //Write your code here
  
    // Get the number of rows from the user
    const rows = parseInt(prompt("Input number of rows"));
    
    // Get the number of columns from the user
    const cols = parseInt(prompt("Input number of columns"));
    
    // Get the table element
    const table = document.getElementById("myTable");
    
    // Clear any existing content in the table
    table.innerHTML = "";
    
    // Create the table structure
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }

}function createTable() {
    //Write your code here
  
    // Get the number of rows from the user
    const rows = parseInt(prompt("Input number of rows"));
    
    // Get the number of columns from the user
    const cols = parseInt(prompt("Input number of columns"));
    
    // Get the table element
    const table = document.getElementById("myTable");
    
    // Clear any existing content in the table
    table.innerHTML = "";
    
    // Create the table structure
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }

}