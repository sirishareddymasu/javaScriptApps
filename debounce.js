// debounce
// request data gathering logic
let button = document.getElementById("demo");
let cilckResult = document.getElementById("sample");
let triggerResult = document.getElementById("simple");
// business logic
let cilckcount = 0;
let triggercount = 0;
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(Timer);
    Timer = settimeout(() => {
      fn();
    }, delay);
  };
}
const debounceResult = debounce(() => {
  triggercount++;
  triggerResult.innerHTML = `triggered :${triggeredcount}`;
}, 1000);

button.addEventListener("click", () => {
  clickcount++;
  cilckResult.innerHTML = `clicked :$(clickcount)`;
  debounceResult();
});
