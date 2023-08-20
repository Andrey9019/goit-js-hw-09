import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector(`button[data-start]`);
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

let countdownInterval;

const datetimePicker = flatpickr('#datetime-picker', options);
const selectedDate = datetimePicker.selectedDates[0];
const currentDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= currentDate) {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

startBtn.addEventListener('click', handlerStart);

function handlerStart() {
  // const selectedDate = datetimePicker.selectedDates[0];
  // const currentDate = new Date();

  // if (selectedDate <= currentDate) {
  //   window.alert('Please choose a date in the future');
  //   return;
  // }

  if (countdownInterval) return;

  countdownInterval = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
}

function updateTimer() {
  // const selectedDate = datetimePicker.selectedDates[0];
  // const currentDate = new Date();
  const timeDifference = selectedDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    countdownInterval = null;
    updateTimerDisplay(0);
    startBtn.disabled = false;
    return;
  }

  const time = convertMs(timeDifference);
  updateTimerDisplay(time);
}

function updateTimerDisplay(time) {
  daysValue.textContent = defaultTime(time.days);
  hoursValue.textContent = defaultTime(time.hours);
  minutesValue.textContent = defaultTime(time.minutes);
  secondsValue.textContent = defaultTime(time.seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function defaultTime(value) {
  return String(value).padStart(2, '0');
}
