var findLargestUniqueSum = function(nums, k) {
  let sumObject = nums.reduce((sumObject,each)=>{
      if (!sumObject.unique.includes(each)) {
          sumObject.unique.push(each)
          sumObject.sum += each
      }
      return sumObject
  }
  , {
      unique: [],
      sum: 0
  })
  return sumObject.sum

};

findLargestUniqueSum([3, 2, 1, 5, 6, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2])
