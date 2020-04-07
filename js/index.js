"use strict";
// Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.date = targetDate;

    this.valueDay = document.querySelector(`span[data-value='days']`);
    this.valueHour = document.querySelector(`span[data-value='hours']`);
    this.valueMin = document.querySelector(`span[data-value='mins']`);
    this.valueSec = document.querySelector(`span[data-value='secs']`);
  }
  renderTargetDate = () => {
    this.time = this.date - new Date();
    this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((this.time % (1000 * 60)) / 1000);
    this.valueDay.textContent = this.days < 10 ? `0${this.days}` : this.days;
    this.valueHour.textContent =
      this.hours < 10 ? `0${this.hours}` : this.hours;
    this.valueMin.textContent =
      this.minutes < 10 ? `0${this.minutes}` : this.minutes;
    this.valueSec.textContent =
      this.seconds < 10 ? `0${this.seconds}` : this.seconds;
  };
  start = () => {
    this.timerId = setInterval(this.renderTargetDate, 500);
  };
  init = () => {
    this.renderTargetDate();
    this.start();
  };
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jun 1, 2020"),
});

timer.init();
