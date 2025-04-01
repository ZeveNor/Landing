
document.addEventListener("DOMContentLoaded", function () {
  const timelineElement = document.getElementById("timeline");
  timelineElement.innerHTML = "";
  const container = document.createElement("div");
  container.className = "status-squares d-flex flex-row-reverse";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < 50; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateString = date.toISOString().split("T")[0];

    const statusSquare = document.createElement("div");
    statusSquare.className = "status-square";

    const isUp = Math.random() > 0;
    statusSquare.classList.add(isUp ? "bg-green" : "bg-red");

    statusSquare.setAttribute("title", `${date.toLocaleDateString()}: ${isUp ? 'Operational' : 'Down'}`);

    container.appendChild(statusSquare);
  }

  timelineElement.appendChild(container);
});

document.addEventListener("DOMContentLoaded", function () {
  const timelineElement = document.getElementById("timeline-flappy-bird");
  timelineElement.innerHTML = "";
  const container = document.createElement("div");
  container.className = "status-squares d-flex flex-row-reverse";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < 50; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateString = date.toISOString().split("T")[0];

    const statusSquare = document.createElement("div");
    statusSquare.className = "status-square";

    const isUp = Math.random() > 0;
    statusSquare.classList.add(isUp ? "bg-green" : "bg-red");

    statusSquare.setAttribute("title", `${date.toLocaleDateString()}: ${isUp ? 'Operational' : 'Down'}`);

    container.appendChild(statusSquare);
  }

  timelineElement.appendChild(container);
});

