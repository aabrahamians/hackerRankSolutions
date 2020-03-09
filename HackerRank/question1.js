var minCoin = function ([...splitWord]) {
  //find unique
  let coinArray = splitWord.reduce((coinArray, each) => {
    if (!coinArray.includes(each)) {
      coinArray.push(each)
    }
    return coinArray
  }, [])
  // sort for comparison
  coinArray.sort();

  // start by assuming min length has to be min length of unique coins
  let minCoincombo = coinArray.length
  let noAnswer = true

  while (noAnswer) {
    for (let x = 0; x < minCoincombo; x++) {
      // start by itterating the coins minCoinCombo at a time
      let possibleAnswer = splitWord.slice(x, x + minCoincombo);
      // find if intersecction between unique coins and current current set of coins
      // creating a set then spreading it into a array gets rid of duplicates necessary for comparison
      let arrayIntersection = [...new Set(possibleAnswer.filter(x => coinArray.includes(x)))];
      // sort
      arrayIntersection.sort();
      // turn to json and compare
      if (JSON.stringify(arrayIntersection) === JSON.stringify(coinArray)) {
        // exit loop return length of answer
        noAnswer = false;
        return possibleAnswer.length
      }

    }

    minCoincombo++

  }

};

minCoin("asdfkjeghfalawefhaef")
