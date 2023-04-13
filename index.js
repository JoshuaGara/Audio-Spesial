confirm("Apakah ini tia ? Jika iya silahkan tekan 'OK'");
alert("Mohon menekan abjad berurutan : J-O-T-E-R-N-A-L-S");

let numberOfButtons = document.querySelectorAll(".btn").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "J":
        let j = new Audio("sounds/J.mp3");
        j.play();
        break;

      case "O":
        let o = new Audio("sounds/O.mp3");
        o.play();
        break;

      case "T":
        let t = new Audio("sounds/T.mp3");
        t.play();
        break;

      case "E":
        let e = new Audio("sounds/E.mp3");
        e.play();
        break;

      case "R":
        let r = new Audio("sounds/R.mp3");
        r.play();
        break;

      case "N":
        let n = new Audio("sounds/N.mp3");
        n.play();
        break;

      case "A":
        let a = new Audio("sounds/A.mp3");
        a.play();
        break;

      case "L":
        let l = new Audio("sounds/L.mp3");
        l.play();
        break;

      case "S":
        let s = new Audio("sounds/S.mp3");
        s.play();
        break;

      default:
        console.log(buttonInnerHTML);
    }
  });
}

let audio = new Audio("sounds/J.mp3");
audio.play();
