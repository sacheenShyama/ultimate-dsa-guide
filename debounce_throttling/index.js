const searchInput = document.getElementById("searchInput");

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const myFunction = function (event) {
  const query = event.target.value;
  console.log("query is:", query);

  //    fetch(`https://api.example.com/search?query=${query}`)
  //    .then((response)=> response.json())
  //    .then((data)=>{
  //       console.log(data)
  //    });
};

searchInput.addEventListener("input", debounce(myFunction, 500));

// Throttling code

const button = document.getElementById("clickButton");

function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

const buttonClick = () => {
  console.log("button clicked...");
};

button.addEventListener("click", throttle(buttonClick, 500));
