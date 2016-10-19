/*
You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

Extra credit if you solve it in one line. You can asume there is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1

examples:

[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"""So as you can see sum of consecutives 1 is 1
sum of 3 consecutives 4 is 12
sum of 0... and sum of 2
consecutives 3 is 6 ..."""

[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]

*/
module.exports = function sumConsecutives(nums) {
  const result = [];
  var stack = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i + 1] !== void 0) {
      if (nums[i] === nums[i + 1]) {
        stack.push(nums[i + 1]);
      } else {
        stack.push(nums[i]);
        result.push(stack.reduce((s, v) => s + v));
        stack.length = 0;
      }
    } else {
      result.push(nums[i]);
    }
  }
  return result;
};


/*
// other solutions
// 1)
function sumConsecutives(s) {
  return s.reduce(function(prev, curr, i, arr) {
    if(curr != arr[i - 1]) prev.push(curr);
    else prev[prev.length - 1] += curr;
    return prev;
  }, []);
}

// 2
function sumConsecutives(s) {
    var sum = 0,
    sums = [];
    for( var i = 0; i < s.length; i++){
      sum += s[i];
      if(s[i] != s[i+1]){
        sums.push(sum);
        sum = 0;
      }
    }
    return sums;
}

// 3
var sumConsecutives = s=> s.reduce( (p,c,i,s) => (c == s[i-1] ? p[p.length-1]+=c : p.push(c), p), [])


// 4
function sumConsecutives(s) {
    var results=[];
    var i=0;
    while (i<s.length) {
        var sum=s[i];
        while (s[i]===s[i+1]) {
            i+=1;
            sum+=s[i];
        }
        results.push(sum);
        i+=1;
    }
    return results;
}

// 5
function sumConsecutives(s) {
  let res = [], cur = s[0], total = 0;
  s.forEach((e,i)=>{
    total += e;
    if (s[i+1] != e) {
      res.push(total);
      total = 0;
    }
  });
  return res;
}

*/