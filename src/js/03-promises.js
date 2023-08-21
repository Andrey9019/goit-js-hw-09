const elenents = {
  form: document.querySelector(`.form`),
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

function submit(evt) {
  evt.preventDefault();
  let firstDelay = Number(elenents.firstDelay.value);
  const delayStep = Number(elenents.delayStep.value);
  const amount = Number(elenents.amount.value);
  let position;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, firstDelay);
    firstDelay = firstDelay + delayStep;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

elenents.form.addEventListener(`submit`, submit);
