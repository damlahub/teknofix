{/* <table style="width:100%">

  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
  </tr>
</table> */}
const hostnamesBTN = document.querySelector("#hostnames");
let hostTable = document.createElement("table");

const createHostname = (hostnames) => {
  const { id, projectName, hostname } = hostnames;
  let hostnameRow = document.createElement("tr");
  hostnameRow.id = id;
  hostnameRow.innerHTML = `
        <td>${projectName}</td>
        <td>${hostname}</td>
    `;
  if (id % 2 == 0) {
    hostnameRow.style.backgroundColor = "var(--tfxPink)";
  } else {
    hostnameRow.style.backgroundColor = "var(--tfxBlue)";
  }
  hostTable.appendChild(hostnameRow);
  return hostnameRow;
}
hostnamesBTN.addEventListener("click", () => {
  _main.innerHTML = "";
  _main.className = "";
  _main.classList.add("hostnameLayout");
  _main.appendChild(hostTable);
  hostnamesDATA.forEach((hostname) => {
    createHostname(hostname);
  });
});