function calculateTotal() {
    // Get the table rows
    const rows = document.getElementsByTagName("tr");
  
    // Initialize variables
    let femaleTotal = 0;
    let maleTotal = 0;
    let orderTotal = 0;
  
    // Loop through the rows
    for (let i = 1; i < rows.length; i++) {
      // Get the cells for the current row
      const cells = rows[i].getElementsByTagName("td");
  
      // Get the quantity input for the current row
      const quantityInput = cells[4].getElementsByTagName("input")[0];
  
      // Get the price for the current row
      const price = parseFloat(cells[3].textContent);
  
      // Calculate the total price for the current row
      const total = price * parseInt(quantityInput.value);
  
      // Update the total price for the female or male jackets
      if (i === 1) {
        femaleTotal += total;
      } else if (i === 2) {
        maleTotal += total;
      }
  
      // Update the order total
      orderTotal += total;
  
      // Update the total price cell for the current row
      cells[5].textContent = total.toFixed(2);
    }
  
    // Update the total price cells for the female and male jackets
    const femaleTotalCell = rows[1].getElementsByTagName("td")[5];
    const maleTotalCell = rows[2].getElementsByTagName("td")[5];
    femaleTotalCell.textContent = femaleTotal.toFixed(2);
    maleTotalCell.textContent = maleTotal.toFixed(2);
  
    // Update the total price cell for the order
    const orderTotalCell = rows[3].getElementsByTagName("td")[5];
    orderTotalCell.textContent = orderTotal.toFixed(2);
  }
  