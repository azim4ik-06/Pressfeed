let numbers = document.querySelectorAll('.num-run-title');

numbers.forEach((number) => {
  let numberTop = number.getBoundingClientRect().top;
  let start = +number.innerHTML;
  let end = +number.dataset.max;
  let increment = Math.ceil((end - start) / 100);
  let current = start;

  window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);

      let interval = setInterval(function () {
        current += increment;
        number.innerHTML = current.toLocaleString();

        if (current >= end) {
          clearInterval(interval);
          number.innerHTML = end.toLocaleString();
        }
      }, 20);
    }
  });
});