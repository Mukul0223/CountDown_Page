document.addEventListener("DOMContentLoaded", function () {
  const targetDate = new Date("2023-12-31 23:59:59").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = padNumber(days);
    document.getElementById("hours").innerText = padNumber(hours);
    document.getElementById("minutes").innerText = padNumber(minutes);
    document.getElementById("seconds").innerText = padNumber(seconds);
  }

  function padNumber(number) {
    return number.toString().padStart(2, "0");
  }

  // Initial call to update countdown
  updateCountdown();

  // Update countdown every second
  setInterval(updateCountdown, 1000);
});
