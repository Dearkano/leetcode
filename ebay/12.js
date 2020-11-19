// Example 1:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.


function wordInString(str, dict) {
    function test(s) {
      if(s.length === 0) return true
      for(const word of dict) {
        if(s.startsWith(word) && test(s.substring(word.length))) {
          return true
        }
      }
      return false
    }
    return test(str)
  }
  
  console.log(wordInString("catsandog", ["dog", "sand", "and", "cat", "cats"]))
  console.log(wordInString("applepenapple", ["apple", "pen"]))function findDuplicates(input) {
    const set = new Set()
    const ans = []
    for(const word of input) {
      if(!set.has(word)) set.add(word)
      else ans.push(word)
    }
    return ans
  }
  
  console.log(findDuplicates(['ebay', 'apple', 'orange', 'shop', 'website', 'ebay']))
  
  function asyncTasks(inputs) {
    const tasks = []
    inputs.forEach((word, index) => {
      tasks.push(new Promise((resolve, reject) => {
        resolve(`Task ID: ${index}, word: ${word}`)
      }))
    })
    
    Promise.all(tasks).then((res) => {
      console.log(res)
    })
  } 
  
  asyncTasks(['ebay', 'apple', 'orange', 'shop', 'website'])