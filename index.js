const tougle = document.getElementById("tougle");
const form = document.getElementById("form");
const prop = document.documentElement.style;
const body = document.getElementById("body");

let tougleIndicator = true;

let rotation = 0;

tougle.addEventListener("click", () => {
  if (tougleIndicator) {
    toSignUp();
    form.style.transform = `rotateY(${(rotation += 0.5)}turn)`;
    let tougleIndicator = false;
  } else {
    toLogIn();
    form.style.transform = `rotateY(${(rotation -= 0.5)}turn)`;
    let tougleIndicator = true;
  }
});

function toSignUp() {
  prop.setProperty("--positionX", "calc(var(--tougleHeight) * 2)");
  prop.setProperty("--rotate", "rotate(-410deg)");
  tougleIndicator = false;
}

function toLogIn() {
  prop.setProperty("--positionX", "calc(var(--tougleHeight) * -0.75)");
  prop.setProperty("--rotate", "rotate(-130deg)");
  tougleIndicator = true;
}

function divadd(a, b, c, d) {
  const div = document.createElement("div");
  div.className = "snow";
  div.style.left = `${random(a, b)}px`;
  div.style.top = `${random(c, d)}px`;
  body.appendChild(div);
  setTimeout(function () {
    div.style.transform = "translateY(-107vh)";
    div.style.transition = "transform 5s cubic-bezier(0.41, 0.77, 1, 0.03)";
  });

  setTimeout(function () {
    div.remove()
  }, 5000);
}

function random(a, b) {
  let i = b - a + 1;
  return Math.floor(Math.random() * i) + a;
}

setInterval(function () {
  const XY = body.getBoundingClientRect();
  divadd(XY.left, XY.right, XY.bottom-25, XY.bottom-20);
}, 15);

