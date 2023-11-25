//your JS code here. If required.
const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

    // Initialize the counter value
    let counterValue = 0;

    // Add a click event listener to the increment button
    incrementButton.addEventListener('click', () => {
      // Display an alert with the current un-incremented value
      alert(`un-incremented: ${counterValue}`);

      // Increment the counter value
      counterValue++;

      // Update the counter element with the new value
      counterElement.textContent = counterValue;

	});