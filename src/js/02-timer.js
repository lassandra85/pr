import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
console.log(flatpickr);

const onTime = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(onTime, {});

/* window.alert("Please choose a date in the future") */
