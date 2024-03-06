const tougle = document.getElementById("tougle");
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const prop = document.documentElement.style;
let tougleIndicator = true;
let rotationTime = 1000;


prop.setProperty("--rotationTime", `${rotationTime}ms`);

let rotation1 = 0;
let rotation2 = 0.5;

signUpForm.style.transform = `rotateY(${rotation2}turn)`;

tougle.addEventListener("click", () => {
  if (tougleIndicator) {
    toSignUp();
  } else {
    toLogIn();
  }
});

function toSignUp() {
  prop.setProperty("--positionX", "calc(var(--tougleHeight) * 2)");
  prop.setProperty("--rotate", "rotate(-410deg)");
  right();
  tougleIndicator = false;
}

function toLogIn() {
  prop.setProperty("--positionX", "calc(var(--tougleHeight) * -0.75)");
  prop.setProperty("--rotate", "rotate(-130deg)");
  left();
  tougleIndicator = true;
}

function right() {
  signInForm.style.transform = `rotateY(${(rotation1 += 0.5)}turn)`;
  signUpForm.style.transform = `rotateY(${(rotation2 += 0.5)}turn)`;
}

function left() {
  signUpForm.style.transform = `rotateY(${(rotation2 -= 0.5)}turn)`;
  signInForm.style.transform = `rotateY(${(rotation1 -= 0.5)}turn)`;
}
