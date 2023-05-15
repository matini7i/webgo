
// تولید عدد تصادفی بین 1 تا 100
var targetNumber = Math.floor(Math.random() * 100) + 1;
var guessCount = 0;
var guessedNumbers = [];

// تابعی برای دریافت حدس بازیکن و بررسی صحت آن
function checkGuess() {
  var userGuess = document.getElementById("guess").value;
  var message = document.getElementById("message");

  // بررسی صحت حدس بازیکن
  if (isNaN(userGuess)) {
    message.innerHTML = "لطفاً یک عدد وارد کنید.";
    return;
  }

  userGuess = parseInt(userGuess);

  // بررسی آیا عدد تکراری است
  if (guessedNumbers.includes(userGuess)) {
    message.innerHTML = "این عدد قبلاً حدس زده شده است.";
    return;
  }

  guessedNumbers.push(userGuess);
  guessCount++;

  // بررسی حدس بازیکن
  if (userGuess === targetNumber) {
    message.innerHTML = "تبریک! شما عدد را در " + guessCount + " حدس برگرفتید.";
  } else if (userGuess < targetNumber) {
    message.innerHTML = "عدد بزرگتری را حدس بزنید.";
  } else {
    message.innerHTML = "عدد کوچکتری را حدس بزنید.";
  }
}

// پاک کردن متن پیام
function resetMessage() {
  document.getElementById("message").innerHTML = "";
}

// صفحه راهنما
function showInstructions() {
  var instructions = "بازی حدسی سخت" +
    "\n" +
    "یک عدد بین 1 تا 100 را حدس بزنید." +
    "\n" +
    "برنامه به شما نشان می‌دهد که عدد مورد نظر بزرگتر یا کوچکتر ا
    function showInstructions() {
        var instructions = "بازی حدسی سخت" +
          "\n" +
          "یک عدد بین 1 تا 100 را حدس بزنید." +
          "\n" +
          "برنامه به شما نشان می‌دهد که عدد مورد نظر بزرگتر یا کوچکتر از حدس شما است." +
          "\n" +
          "سعی کنید عدد را در کمترین تعداد حدس بزنید." +
          "\n\n" +
          "نکته: اگر عدد تکراری را حدس بزنید، برنامه به شما خطای مربوطه را نشان می‌دهد." +
          "\n\n" +
          "شروع بازی..." +
          "\n";
      
        alert(instructions);
      }
      


