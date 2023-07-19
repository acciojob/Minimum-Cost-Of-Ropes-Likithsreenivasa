function calculateMinCost() {
  //your code here
	  let totalCost = 0;

  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    // Select the two smallest ropes
    const smallest1 = arr.shift();
    const smallest2 = arr.shift();

    // Connect the ropes and add their lengths to the total cost
    const connectedRope = smallest1 + smallest2;
    totalCost += connectedRope;

    // Insert the connected rope back into the array
    // at the appropriate position to maintain the sorted order
    let i = 0;
    while (i < arr.length && arr[i] < connectedRope) {
      i++;
    }
    arr.splice(i, 0, connectedRope);
  }

  return totalCost;
}

// Function to handle the form submission
function calculateMinCost() {
  // Get the input value
  const inputValue = document.getElementById('rope-lengths').value;

  // Convert the comma-separated string to an array of integers
  const arr = inputValue.split(',').map(Number);

  // Find the minimum cost of ropes
  const minimumCost = findMinimumCostRopeLengths(arr);

  // Display the result
  document.getElementById('result').textContent = minimumCost;
}

// Attach event listener to the button click
document.getElementById('calculate-button').addEventListener('click', calculateMinCost);
  
  
  
}  
