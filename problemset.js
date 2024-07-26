document.addEventListener("DOMContentLoaded", function() {
  const problems = [
      { title: "1567A   Wrong Subtraction", rating: 800, tags: ["implementation"] },
      { title: "1695B  Xenia and Ringroad", rating: 1000, tags: ["implementation", "math"] },
      { title: "1567A  Little Pony and Sort by Shift", rating: 1200, tags: ["brute force", "implementation"] },
      { title: "1994H Fortnite", rating: "", tags: ["constructive algorithms", "interactive", "math"] },
        { title: "1994G Minecraft", rating: "", tags: ["bitmasks", "brute force", "dp", "math"] },
        { title: "1994F Stardew Valley", rating: "", tags: ["constructive algorithms", "dfs and similar", "graphs"] },
        { title: "1994E Wooden Game", rating: "", tags: ["bitmasks", "greedy", "math", "trees"] },
        { title: "1994D Funny Game", rating: "", tags: ["constructive algorithms", "dsu", "graphs", "greedy", "math", "number theory", "trees"] },
        { title: "1994C Hungry Games", rating: "", tags: ["binary search", "dp", "two pointers"] },
        { title: "1994B Fun Game", rating: "", tags: ["bitmasks", "constructive algorithms", "greedy", "math"] },
        { title: "1994A Diverse Game", rating: "", tags: ["constructive algorithms", "greedy"] },
        { title: "1992G Ultra-Meow", rating: "2000", tags: ["combinatorics", "dp", "math"] },
        { title: "1992F Valuable Cards", rating: "1900", tags: ["brute force", "dp", "greedy", "number theory", "two pointers"] },
        { title: "1992E Novice's Mistake", rating: "1700", tags: ["brute force", "constructive algorithms", "implementation", "math", "strings"] },
        { title: "1992D Test of Love", rating: "1200", tags: ["dp", "greedy", "implementation"] },
        { title: "1992C Gorilla and Permutation", rating: "900", tags: ["constructive algorithms", "math"] },
        { title: "1992B Angry Monk", rating: "800", tags: ["greedy", "math", "sortings"] },
        { title: "1992A Only Pluses", rating: "800", tags: ["brute force", "constructive algorithms", "greedy", "math", "sortings"] },
        { title: "1989F Simultaneous Coloring", rating: "3000", tags: ["dfs and similar", "divide and conquer", "graphs"] },
        { title: "1989E Distance to Different", rating: "2300", tags: ["combinatorics", "dp", "math"] },
        { title: "1989D Smithing Skill", rating: "1900", tags: ["brute force", "data structures", "dp", "greedy", "math", "sortings", "two pointers"] },
        { title: "1989C Two Movies", rating: "1400", tags: ["greedy", "math"] },
        { title: "1989B Substring and Subsequence", rating: "1200", tags: ["brute force", "greedy", "strings"] },
        { title: "1989A Catch the Coin", rating: "800", tags: ["implementation"] },
        { title: "1988F Heartbeat", rating: "", tags: ["combinatorics", "dp", "fft", "math"] },
        { title: "1988E Range Minimum Sum", rating: "", tags: ["binary search", "brute force", "data structures", "divide and conquer", "implementation"] },
        { title: "1988D The Omnipotent Monster Killer", rating: "", tags: ["brute force", "dfs and similar", "dp", "trees"] },
        { title: "1988C Increasing Sequence with Fixed OR", rating: "", tags: ["bitmasks", "constructive algorithms", "greedy"] },
        { title: "1988B Make Majority", rating: "", tags: ["greedy", "implementation"] },
        { title: "1988A Split the Multiset", rating: "", tags: ["brute force", "greedy", "math"] },
        { title: "1987H Fumo Temple", rating: "3500", tags: ["interactive"] },
        { title: "1987G Spinning Round (Hard Version)", rating: "3500", tags: ["divide and conquer", "dp", "trees"] },
        { title: "1987G Spinning Round (Easy Version)", rating: "2900", tags: ["divide and conquer", "dp", "trees"] },
        { title: "1987F Interesting Problem (Hard Version)", rating: "2600", tags: ["dp"] },
        { title: "1987F Interesting Problem (Easy Version)", rating: "2500", tags: ["dp"] },
        { title: "1987E Wonderful Tree!", rating: "2000", tags: ["brute force", "data structures", "dfs and similar", "dsu", "greedy", "trees"] },
        { title: "1987D World is Mine", rating: "1800", tags: ["dp", "games"] },
        { title: "1987C Basil's Garden", rating: "1200", tags: ["dp", "greedy"] },
        { title: "1987B K-Sort", rating: "1000", tags: ["greedy"] },
        { title: "1987A Upload More RAM", rating: "800", tags: ["greedy", "math"] },
        { title: "1986G Permutation Problem (Hard Version)", rating: "2500", tags: ["brute force", "data structures", "hashing", "math", "number theory"] },
        { title: "1986G Permutation Problem (Simple Version)", rating: "2200", tags: ["binary search", "brute force", "combinatorics", "data structures", "math", "number theory"] },
        { title: "1986F Non-academic Problem", rating: "1900", tags: ["dfs and similar", "graphs", "trees"] },
        { title: "1986E Beautiful Array", rating: "1700", tags: ["greedy", "math", "number theory", "sortings"] },
        { title: "1986D Mathematical Problem", rating: "1400", tags: ["brute force", "dp", "greedy", "implementation", "math", "two pointers"] },
        { title: "1986C Update Queries", rating: "1100", tags: ["data structures", "greedy", "sortings"] },
        { title: "1986B Matrix Stabilization", rating: "1000", tags: ["brute force", "data structures", "greedy", "sortings"] },
        { title: "1986A X Axis", rating: "800", tags: ["brute force", "geometry", "math", "sortings"] },
        { title: "1985H Maximize the Largest Component (Hard Version)", rating: "2200", tags: ["data structures", "dfs and similar", "dp", "dsu", "implementation"] },
        { title: "1985H Maximize the Largest Component (Easy Version)", rating: "1700", tags: ["brute force", "data structures", "dfs and similar", "dsu", "graphs", "implementation"] },
        { title: "1985G D-Function", rating: "1600", tags: ["combinatorics", "math", "number theory"] },
        { title: "1985F Final Boss", rating: "1500", tags: ["binary search", "data structures"] },
        { title: "1985E Secret Box", rating: "1200", tags: ["brute force", "combinatorics", "math"] },
        { title: "1985D Manhattan Circle", rating: "900", tags: ["implementation", "math"] },
        { title: "1985C Good Prefixes", rating: "1000", tags: ["greedy"] },
        { title: "1985B Maximum Multiple Sum", rating: "800", tags: ["brute force", "math", "number theory"] },
        { title: "1985A Creating Words", rating: "800", tags: ["implementation", "strings"] },
        { title: "1984H Tower Capturing", rating: "3300", tags: ["combinatorics", "dp", "geometry"] },
        { title: "1984G Magic Trick II", rating: "3200", tags: ["constructive algorithms", "implementation", "sortings"] },
        { title: "1984F Reconstruction", rating: "2500", tags: ["brute force", "dp", "math"] },
        { title: "1984E Shuffle", rating: "2400", tags: ["dp", "greedy", "trees"] },
        { title: "1984D ''a'' String Problem", rating: "2000", tags: ["brute force", "hashing", "implementation", "math", "string suffix structures", "strings"] },
        { title: "1984C Magnitude (Hard Version)", rating: "1700", tags: ["combinatorics", "dp", "greedy", "math"] },
        { title: "1984C Magnitude (Easy Version)", rating: "1300", tags: ["dp", "greedy", "math"] },
        { title: "1984B Large Addition", rating: "1100", tags: ["implementation", "math"] },
        { title: "1984A Strange Splitting", rating: "800", tags: ["constructive algorithms"] },
        { title: "1983G Your Loss", rating: "3000", tags: ["bitmasks", "brute force", "dp", "trees"] },
        { title: "1983F array-value", rating: "2500", tags: ["binary search", "bitmasks", "data structures", "greedy", "two pointers"] },
        { title: "1983E I Love Balls", rating: "2300", tags: ["combinatorics", "math", "probabilities"] },
        { title: "1983D Swap Dilemma", rating: "1700", tags: ["constructive algorithms", "data structures", "divide and conquer", "greedy", "math", "sortings"] },
        { title: "1983C Have Your Cake and Eat It Too", rating: "1400", tags: ["binary search", "brute force", "greedy", "implementation"] },
        { title: "1983B Corner Twist", rating: "1200", tags: ["constructive algorithms", "greedy", "implementation", "math"] },
        { title: "1983A Array Divisibility", rating: "800", tags: ["constructive algorithms", "math"] },
        { title: "1982F Sorting Problem Again", rating: "2600", tags: ["binary search", "data structures", "sortings"] },
        { title: "1982E Number of k-good subarrays", rating: "2300", tags: ["bitmasks", "brute force", "combinatorics", "divide and conquer", "dp", "math", "meet-in-the-middle"] },
        { title: "1982D Beauty of the mountains", rating: "1700", tags: ["brute force", "data structures", "implementation", "math", "number theory"] },
        { title: "1982C Boring Day", rating: "1200", tags: ["binary search", "data structures", "dp", "greedy", "two pointers"] },
        { title: "1982B Collatz Conjecture", rating: "1200", tags: ["brute force", "implementation", "math", "number theory"] },
        { title: "1982A Soccer", rating: "800", tags: ["greedy", "implementation", "math", "sortings"] },
        { title: "1981F Turtle and Paths on a Tree", rating: "3000", tags: ["data structures", "dp", "trees"] },
        { title: "1981E Turtle and Intersected Segments", rating: "2600", tags: ["data structures", "dsu", "graphs", "greedy"] },
        { title: "1981D Turtle and Multiplication", rating: "2400", tags: ["constructive algorithms", "dfs and similar", "graphs", "number theory"] },
        { title: "1981C Turtle and an Incomplete Sequence", rating: "1800", tags: ["bitmasks", "brute force", "constructive algorithms", "greedy", "implementation", "math"] },
        { title: "1981B Turtle and an Infinite Sequence", rating: "1300", tags: ["bitmasks", "math"] },
        { title: "1981A Turtle and Piggy Are Playing a Game", rating: "800", tags: ["brute force", "greedy", "math"] },
        { title: "1980G Yasya and the Mysterious Tree", rating: "2300", tags: ["bitmasks", "data structures", "dfs and similar", "graphs", "greedy", "strings", "trees"] },
        { title: "1980F Field Division (hard version)", rating: "2400", tags: ["math", "sortings"] },
        { title: "1980F Field Division (easy version)", rating: "1900", tags: ["data structures", "math", "sortings"] },
        { title: "1980E Permutation of Rows and Columns", rating: "1600", tags: ["constructive algorithms", "data structures", "greedy", "hashing", "implementation", "math", "matrices", "sortings"] },
        { title: "1980D GCD-sequence", rating: "1400", tags: ["greedy", "implementation", "math", "number theory"] },
        { title: "1980C Sofia and the Lost Operations", rating: "1300", tags: ["constructive algorithms", "greedy"] },
        { title: "1980B Choosing Cubes", rating: "800", tags: ["sortings", "sortings"] },
        { title: "1980A Problem Generator", rating: "800", tags: ["math"] },
        { title: "1979F Kostyanych's Theorem", rating: "2900", tags: ["brute force", "constructive algorithms", "graphs", "interactive"] },
        { title: "1979E Manhattan Triangle", rating: "2400", tags: ["binary search", "constructive algorithms", "data structures", "geometry", "implementation", "two pointers"] },
        { title: "1979D Fixing a Binary String", rating: "1800", tags: ["bitmasks", "brute force", "constructive algorithms", "dp", "greedy", "hashing", "strings"] },
        { title: "1979C Earning on Bets", rating: "1200", tags: ["binary search", "combinatorics", "constructive algorithms", "number theory"] },
        { title: "1979B XOR Sequences", rating: "1000", tags: ["bitmasks", "greedy"] },
        { title: "1979A Guess the Maximum", rating: "800", tags: ["brute force", "greedy", "implementation"] },
        { title: "1978F Large Graph", rating: "2400", tags: ["data structures", "dfs and similar", "dsu", "graphs", "number theory", "two pointers"] },
        { title: "1978E Computing Machine", rating: "2000", tags: ["brute force", "data structures", "dp", "greedy", "implementation"] },
        { title: "1978D Elections", rating: "1600", tags: ["data structures", "greedy", "implementation", "math"] },
        { title: "1978C Manhattan Permutations", rating: "1300", tags: ["constructive algorithms", "data structures", "greedy", "implementation", "math"] }
  ];

  const tableBody = document.querySelector("#problemset tbody");
  const searchInput = document.getElementById("search");

  function renderProblems(filteredProblems) {
      tableBody.innerHTML = "";
      filteredProblems.forEach(problem => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${problem.title}</td>
              <td>${problem.rating}</td>
              <td>${problem.tags.join(", ")}</td>
          `;
          tableBody.appendChild(row);
      });
  }

  searchInput.addEventListener("input", function() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredProblems = problems.filter(problem =>
          problem.title.toLowerCase().includes(searchTerm) ||
          problem.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
      renderProblems(filteredProblems);
  });

  // Initial render
  renderProblems(problems);
});

document.querySelectorAll('.header-button').forEach(button => {
  button.addEventListener('mouseenter', () => {
      document.getElementById('search').style.marginTop = '10px';
  });
  button.addEventListener('mouseleave', () => {
      document.getElementById('search').style.marginTop = '0';
  });
});
