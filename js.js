const letters = "ABCD09876EFGHIKLMNOPQR2345678STVXYZ&ÞÐÆ";

document.querySelector("h1").onmouseover = (event) => {
  let interation = 0;

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < interation) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })

      .join("");

    if (interation >= event.target.dataset.value.length)
      clearInterval(interval);

    interation += 1 / 6;
  }, 40);
};
