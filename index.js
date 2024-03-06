const tougle = document.getElementById("tougle");
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const prop = document.documentElement.style;
let tougleIndicator = true;

let rotation1 = 0;
let rotation2 = 180;

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
  hideSignInForm();
  setTimeout(function () {
    ShowSignUpForm();
  }, 5000);
  tougleIndicator = false;
}

// function toLogIn() {
//   prop.setProperty("--positionX", "calc(var(--tougleHeight) * -0.75)");
//   prop.setProperty("--rotate", "rotate(-130deg)");
//   //signUpForm.style.transform = "rotateY(180deg)";
//   //ShowSignInForm();
//   //hideSignUpForm();
//   tougleIndicator = true;
// }

function hideSignInForm() {
  console.log("start!");
  signInForm.style.transform = `rotateY(${(rotation1 += 180)}deg)`;
  setTimeout(function () {
    signInForm.style.display = "none";
    console.log(`rotation1 =  ${rotation1} end`);
  }, 5000);
}

function ShowSignUpForm() {
  signUpForm.style.display = "grid";
  console.log("now!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  signUpForm.style.transform = `rotateY(${(rotation2 += 180)}deg)`;
  console.log(`rotation2 =  ${rotation2}`);
}

// function ShowSignInForm() {
//   signInForm.style.transform = `rotateY(${(rotation1 += 180)}deg)`;
//   signInForm.style.display = "grid";
//   console.log(`rotation =  ${rotation1}`);
// }

// function hideSignUpForm() {
//   signInForm.style.transform = `rotateY(${(rotation2 += 180)}deg)`;
//   signUpForm.style.display = "none";
//   console.log(`rotation =  ${rotation2}`);
// }
