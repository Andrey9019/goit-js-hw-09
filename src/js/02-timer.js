import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

const currentDate = new Date();

startBtn.disable = true;
let timerID;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(datePicker, options);
