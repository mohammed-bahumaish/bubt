export class Bubble {
  constructor() {
    this.bubbleSpan = undefined;
    this.handleNewBubble();

    this.posY = this.randomNumber(window.innerHeight - 20, 20);
    this.posX = this.randomNumber(window.innerWidth - 20, 20);

    this.bubbleSpan.style.top = this.posY + "px";
    this.bubbleSpan.style.left = this.posX + "px";

    // setting height and width of the bubble
    this.height = this.randomNumber(60, 20);
    this.width = this.height;

    this.bubbleEnd.call(this.bubbleSpan, this.randomNumber(6000, 3000));
  }

  // creates and appends a new bubble in the DOM
  handleNewBubble() {
    this.bubbleSpan = document.createElement("span");
    this.bubbleSpan.classList.add("bubble");
    document.querySelector("#container")?.append(this.bubbleSpan);
    this.handlePosition();
  }

  handlePosition() {
    // positioning the bubble in different random X and Y

    this.bubbleSpan.style.backgroundColor = "#fff";
    this.bubbleSpan.style.height = this.height + "px";
    this.bubbleSpan.style.width = this.height + "px";

    this.posY = this.randomNumber(window.innerHeight + 100, window.innerHeight);
    // this.posX = this.randomNumber(window.innerWidth - 20, 20);

    this.bubbleSpan.style.top = -100 + "px";
    // this.bubbleSpan.style.left = this.posX + "px";

    const randomSec = this.randomNumber(4000, 200);
    setTimeout(this.handlePosition.bind(this), randomSec); // calling for re-position of bubble
  }

  randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  bubbleEnd(removingTime = 0) {
    setTimeout(
      () => {
        this.classList.add("bubble--bust");
      },
      removingTime === 0 ? removingTime : removingTime - 100
    );

    setTimeout(() => {
      this.remove();
      new Bubble();
    }, removingTime);
  }
}

// creating many bubble instance
