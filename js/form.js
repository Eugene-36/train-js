// const singleBtn = document.querySelector("#single");

// const handleClick = (e) => {
//   e.preventDefault();
//   // console.log("event", e.currentTarget.value);
//   console.log("target: ", e.target);
// };
// singleBtn.addEventListener("click", handleClick);

//todo! Простая Форма на регистрацию
const form = document.querySelector(".form");

const loginInput = form.querySelector(".text");
const inputPassword = form.querySelector('input[type="password"]');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const login = loginInput.value.trim();
  const password = inputPassword.value.trim();

  if (login === "" || password === "") {
    return alert("Дружок , у тебя в голове пусто");
  }

  form.reset();

  alert(`Спасибо за регистрацию! Логин:${login} Пароль: ${password}`);
}
