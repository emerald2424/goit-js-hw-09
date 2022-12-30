import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

//styles
const timer = document.querySelector('.timer');
timer.style.display = 'flex';
timer.style.gap = '20px';
const spanData = document.querySelectorAll('.value');
spanData.forEach(span => {
  span.style.display = 'block';
  span.style.fontSize = '40px';
})


const datetimePicker = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');

let chosenDate = new Date();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);

      if (selectedDates[0] <= options.defaultDate) {
        startBtn.setAttribute('disabled', true);
        Notiflix.Notify.warning("Please, choose a date in the future");
        // window.alert("Please, choose a date in the future");
        return; 
      }
      startBtn.removeAttribute('disabled');
      chosenDate = selectedDates[0];
    },
};

const fp = flatpickr(datetimePicker, options);

startBtn.addEventListener('click', startTimer);

function startTimer() {
  const timerId = setInterval(() => {
    
    const diffTime = chosenDate - Date.now();
    
    if (diffTime <= 0) {
      clearInterval(timerId);
      return;
    }
    timerDays.textContent = addLeadingZero(convertMs(diffTime).days);
    timerHours.textContent = addLeadingZero(convertMs(diffTime).hours);
    timerMinutes.textContent = addLeadingZero(convertMs(diffTime).minutes);
    timerSeconds.textContent = addLeadingZero(convertMs(diffTime).seconds);
    
  }, 1000);

} 


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };

}

function addLeadingZero(value) {
  return `${value.toString().padStart(2, '0')}`;
}
