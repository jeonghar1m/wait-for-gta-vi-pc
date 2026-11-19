const startedAt = Date.parse(document.querySelector("time").dateTime);
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
let nextTick;

function renderCounter() {
  const now = Date.now();
  const elapsed = Math.max(0, Math.floor((now - startedAt) / 1000));

  days.textContent = Math.floor(elapsed / 86400).toLocaleString("ko-KR");
  hours.textContent = Math.floor(elapsed / 3600) % 24;
  minutes.textContent = Math.floor(elapsed / 60) % 60;
  seconds.textContent = elapsed % 60;

  clearTimeout(nextTick);
  nextTick = setTimeout(renderCounter, 1000 - (now % 1000));
}

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) renderCounter();
});
window.addEventListener("pageshow", renderCounter);
renderCounter();
