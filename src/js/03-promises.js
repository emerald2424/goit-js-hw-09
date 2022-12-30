// import Notiflix from 'notiflix';


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
    
  });
  
}


const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // let { delay: {
  //   value: delay
  // },
  //   step: {
  //     value: step
  //   }, 
  //   amount: {
  //     value: amount
  //   } } = event.currentTarget.elements;

  const step = Number(event.currentTarget.elements.step.value);
  const amount = Number(event.currentTarget.elements.amount.value);
  let delay = Number(event.currentTarget.elements.delay.value);
  let position = 0;

    
  const id = setInterval(() => {
    position += 1;
    delay += step;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    

    if (position === amount) {
      clearInterval(id);
      return;
    }
  }, delay)
}


