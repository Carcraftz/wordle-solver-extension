console.log("EXECUTING SOLVER")
   let solution = JSON.parse(localStorage.getItem("nyt-wordle-state")).solution;
      for (let i = 0; i < solution.length; i++) {
        let char = solution[i];
        window.dispatchEvent(new KeyboardEvent("keydown", { key: char }));
      }
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      alert("Are you sure? If you click OK, i'll solve the puzzle for you!");