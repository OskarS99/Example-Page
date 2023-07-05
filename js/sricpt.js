{
  const onTableDelete = () => {
    const table = document.querySelector(".js-table");
    let actionName = document.querySelector(".actionName");
    table.classList.toggle("table--hidden");
    actionName.innerText = table.classList.contains("table--hidden")
      ? "Dodaj"
      : "Usuń";
  };

  const init = () => {
    const button = document.querySelector(".js-button");
    button.addEventListener("click", onTableDelete);
  };
  init();
}
