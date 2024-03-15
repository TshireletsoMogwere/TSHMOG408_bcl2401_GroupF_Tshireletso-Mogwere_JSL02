// Define a function to display a welcome message with the current date.
   const welcomeMessage = () => {
// Get the current date and convert it to a string.
   const today = new Date().toDateString();
// Set the text content of the element with the ID 'welcomeMessage' to display the welcome message.
   document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};

// Call the welcomeMessage function to display the welcome message when the page loads.
   welcomeMessage();

// Define a function to handle the submission of a workout routine.
   const displayWorkoutRoutine = () => {
// Get the value of the input field where the user enters the workout.
   const workoutInput = document.querySelector('#workoutInput').value.trim(); // Trim any leading/trailing whitespace
    
// Get the unordered list element where the workouts will be displayed.
   const workoutList = document.querySelector('#workoutList');
    
// Check if the input is empty
   if (workoutInput === "") {
   alert("Please enter a workout.");
   return;
}
    
// Check if the workout already exists in the list
   if ([...workoutList.children].some(item => item.textContent.trim() === workoutInput)) {
   alert("This workout already exists in the list.");
   return;
}
    
// Create a new list item element to display the entered workout.
   const newWorkout = document.createElement('li');
// Set the text content of the new list item to the entered workout.
   newWorkout.textContent = workoutInput;
// Append the new list item to the workout list.
   workoutList.appendChild(newWorkout);
};

// Add an event listener to the submit button to call the displayWorkoutRoutine function when clicked.
   document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

//This code checks the exisiting goals
   const addNewGoal = () => {
   const goalInput = document.querySelector('#goalInput').value;
   const goalList = document.querySelector('#goalList');

// This code prevents same goals from being entered more than once
    const goals = [...goalList.children].map(item => item.textContent.trim());
    if (goals.includes(goalInput)) {
        alert("This goal already exists in the list.");
        return;
    }

// Create a new list item element (<li>) to represent the new goal.
    const newGoalItem = document.createElement('li');

// Set the text content of the new list item to the value entered by the user.
    newGoalItem.textContent = goalInput;

//This code removes an added goal when clicked
    newGoalItem.addEventListener('click', () => {
        goalList.removeChild(newGoalItem);
    });

// Append the new list item (representing the new goal) to the goalList (the unordered list where goals are displayed).
    goalList.appendChild(newGoalItem);
};

// Add event listener to the goal submit button
   document.querySelector('#submitGoal').addEventListener('click', addNewGoal);


   let waterIntake = 0;
   const updateWaterIntake = (change) => {
   waterIntake += change;
   document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

   document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
   document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

    const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

    updateProgressCharts();

    const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

    document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

    const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

    document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
