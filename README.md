# [JSL02]  Debugging Duplicate Goals

# Overview
  I created a check test that tracks fitness goals. The goal was to prevent goals from being entered more than once to enhance the user's experience.

**Explanation:**
  1. I retrieved all the existing goals in the `goalList` using `querySelectorAll`.
  2. I then iterated through each existing goal and compared its text content with the new goal input.
  3. I created an if function for a duplicate that is found to display an alert message and exit the function using `return` to prevent the d duplicate goal from being added.
  4. If no duplicate is found, a can be added new goal as before.

**Learning experience**
  As a person who enjoys problem solving it was fun going through the struggles of having to debug the code. 


