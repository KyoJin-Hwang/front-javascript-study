const timer = {
  title: "TIMER!",

  timeout() {
    console.log(this.title);
    setTimeout(function () {
      // 콜백
      console.log(this.title);
    }, 1000);
  },
};

timer.timeout();
