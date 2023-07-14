function generateMealPlan() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const goal = document.getElementById('goal').value;

  if (validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  const meals = {
    monday: {
      breakfast: document.getElementById('mondayBreakfast').value,
      snack: document.getElementById('mondaySnack').value,
      lunch: document.getElementById('mondayLunch').value,
      snack2: document.getElementById('mondaySnack2').value,
      dinner: document.getElementById('mondayDinner').value
    },
    tuesday: {
      breakfast: document.getElementById('tuesdayBreakfast').value,
      snack: document.getElementById('tuesdaySnack').value,
      lunch: document.getElementById('tuesdayLunch').value,
      snack2: document.getElementById('tuesdaySnack2').value,
      dinner: document.getElementById('tuesdayDinner').value
    },
    wednesday: {
      breakfast: document.getElementById('wednesdayBreakfast').value,
      snack: document.getElementById('wednesdaySnack').value,
      lunch: document.getElementById('wednesdayLunch').value,
      snack2: document.getElementById('wednesdaySnack2').value,
      dinner: document.getElementById('wednesdayDinner').value
    },
    thursday: {
      breakfast: document.getElementById('thursdayBreakfast').value,
      snack: document.getElementById('thursdaySnack').value,
      lunch: document.getElementById('thursdayLunch').value,
      snack2: document.getElementById('thursdaySnack2').value,
      dinner: document.getElementById('thursdayDinner').value
    },
    friday: {
      breakfast: document.getElementById('fridayBreakfast').value,
      snack: document.getElementById('fridaySnack').value,
      lunch: document.getElementById('fridayLunch').value,
      snack2: document.getElementById('fridaySnack2').value,
      dinner: document.getElementById('fridayDinner').value
    },
    saturday: {
      breakfast: document.getElementById('saturdayBreakfast').value,
      snack: document.getElementById('saturdaySnack').value,
      lunch: document.getElementById('saturdayLunch').value,
      snack2: document.getElementById('saturdaySnack2').value,
      dinner: document.getElementById('saturdayDinner').value
    },
    sunday: {
      breakfast: document.getElementById('sundayBreakfast').value,
      snack: document.getElementById('sundaySnack').value,
      lunch: document.getElementById('sundayLunch').value,
      snack2: document.getElementById('sundaySnack2').value,
      dinner: document.getElementById('sundayDinner').value
    }
  };

  const mealPlanHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Meal Plan for ${name}</title>
      <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
    <body>
      <header>
        <h1>Meal Plan for ${name}</h1>
        <p>Email: ${email}</p>
        <p>Goal: ${goal}</p>
      </header>

      <table>
        <tr>
          <th>Day</th>
          <th>Breakfast</th>
          <th>Snack</th>
          <th>Lunch</th>
          <th>Snack</th>
          <th>Dinner</th>
        </tr>
        <tr>
          <td>Monday</td>
          <td>${meals.monday.breakfast}</td>
          <td>${meals.monday.snack}</td>
          <td>${meals.monday.lunch}</td>
          <td>${meals.monday.snack2}</td>
          <td>${meals.monday.dinner}</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>${meals.tuesday.breakfast}</td>
          <td>${meals.tuesday.snack}</td>
          <td>${meals.tuesday.lunch}</td>
          <td>${meals.tuesday.snack2}</td>
          <td>${meals.tuesday.dinner}</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>${meals.wednesday.breakfast}</td>
          <td>${meals.wednesday.snack}</td>
          <td>${meals.wednesday.lunch}</td>
          <td>${meals.wednesday.snack2}</td>
          <td>${meals.wednesday.dinner}</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>${meals.thursday.breakfast}</td>
          <td>${meals.thursday.snack}</td>
          <td>${meals.thursday.lunch}</td>
          <td>${meals.thursday.snack2}</td>
          <td>${meals.thursday.dinner}</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>${meals.friday.breakfast}</td>
          <td>${meals.friday.snack}</td>
          <td>${meals.friday.lunch}</td>
          <td>${meals.friday.snack2}</td>
          <td>${meals.friday.dinner}</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>${meals.saturday.breakfast}</td>
          <td>${meals.saturday.snack}</td>
          <td>${meals.saturday.lunch}</td>
          <td>${meals.saturday.snack2}</td>
          <td>${meals.saturday.dinner}</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>${meals.sunday.breakfast}</td>
          <td>${meals.sunday.snack}</td>
          <td>${meals.sunday.lunch}</td>
          <td>${meals.sunday.snack2}</td>
          <td>${meals.sunday.dinner}</td>
        </tr>
      </table>

      <div class="button-group">
        <button onclick="window.print()">Print/Download</button>
      </div>

    </body>
    </html>
  `;

  const newWindow = window.open();
  newWindow.document.write(mealPlanHTML);
  newWindow.document.close();
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[..s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}