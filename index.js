document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here
    const submitButton = document.getElementById('submit-btn');
    const ratingCard = document.querySelector('.active-card');
    const thankYouCard = document.getElementById('thank-you-card');
    const showRatingButton = document.getElementById('show-rating-button');
    const selectedRatingDiv = document.getElementById('selected-rating');
    const ratingValueSpan = document.getElementById('rating-value');

    // Get all rating buttons
    const ratingButtons = document.querySelectorAll('.rating-button');

    // Function to handle rating selection
    function handleRatingSelection(event) {
        // Remove the 'selected' class from all buttons
        ratingButtons.forEach(button => {
            button.classList.remove('selected');
        });

        // Add the 'selected' class to the clicked button
        const selectedButton = event.currentTarget;
        selectedButton.classList.add('selected');

        // Get the selected rating value
        const selectedRating = selectedButton.value;

        // You can do something with the selected rating value here
        console.log(`Selected rating: ${selectedRating}`);
    }

    // Add click event listeners to all rating buttons
    ratingButtons.forEach(button => {
        button.addEventListener('click', handleRatingSelection);
    });

    // Function to show the thank you card and hide the rating card
    function showThankYouCard() {
        ratingCard.style.display = 'none'; // Hide the rating card
        thankYouCard.style.display = 'block'; // Show the thank you card
    }

    // Add click event listener to the submit button
    submitButton.addEventListener('click', () => {
        // Retrieve the selected rating (if needed) and perform further actions
        const selectedRating = document.querySelector('.rating-button.selected');
        if (selectedRating) {
            const ratingValue = selectedRating.value;
            console.log(`Submitting rating: ${ratingValue}`);

            // Show the thank you card and hide the rating card
            showThankYouCard();
        } else {
            console.log('Please select a rating before submitting.');
        }
    });

    // Add click event listener to the "Show Rating" button
    showRatingButton.addEventListener('click', () => {
        // Retrieve the selected rating
        const selectedRating = document.querySelector('.rating-button.selected');
        if (selectedRating) {
            const ratingValue = selectedRating.value;
            // Display the selected rating out of 5
            selectedRatingDiv.classList.remove('hidden');
            ratingValueSpan.textContent = ratingValue;
        }
    });
});
