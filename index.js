const tougle = document.getElementById("tougle");
const form = document.getElementById("form");
const prop = document.documentElement.style;

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
