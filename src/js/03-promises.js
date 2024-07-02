import { Notify } from 'notiflix';

const promisesForm = document.querySelector('.form');

function onPromisesFormSubmit(e) {
  e.preventDefault();
  createPromise(2, 1500)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

/* function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
} */

/* 

const promisesForm = document.querySelector('.form');
promisesForm.addEventListener('submit', onPromisesFormSubmit);

function onPromisesFormSubmit(e) {
  e.preventDefault();
  const { amount, delay, step } = e.target.elements;
  const submitButton = e.target.lastElementChild;
  let delayTime = Number(delay.value);
  
  submitButton.disabled = true;
  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayTime += Number(step.value);
  }

  setTimeout(() => {
    submitButton.disabled = false;
  }, delayTime);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
 */

/* 
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Final task");
  });



Промісифікація функцій

​

Уявімо, що у нас є асинхронна функція, яка виконує якусь асинхронну операцію, наприклад, запит на сервер. Для того щоб обробити результат, її доведеться спроектувати таким чином, що вона буде очікувати на два колбеки - для успішного запиту і для помилки.



const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = true;

    if (isSuccess) {
      onSuccess("success value");
    } else {
      onError("error");
    }
  }, 2000);
};

const onFetchSuccess = user => {
  console.log(user);
};

const onFetchError = error => {
  console.error(error);
};

fetchUserFromServer("Mango", onFetchSuccess, onFetchError); */
