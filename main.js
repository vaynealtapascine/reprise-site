const rearrange = document.querySelector(".rearrange");
const composition = document.querySelector(".composition");
const status = document.querySelector("#composition-status");

if (rearrange && composition && status) {
  let arrangement = 0;
  rearrange.hidden = false;
  rearrange.addEventListener("click", () => {
    arrangement = (arrangement + 1) % 3;
    composition.dataset.arrangement = String(arrangement);
    status.textContent = `Word composition ${arrangement + 1} of 3.`;
  });
}
