
      
      function sumOfOther(arr) {
        let answer = [],
        main;
        for (let i = 0; i<arr.length; i++) {
          let counterNumber = 0,
          counterChar = '';
          for (let y = 0; y<arr.length; y++) {
            if (i!=y) {
              if (isFinite(arr[y]) == true) {
                counterNumber+=arr[y];
                main = true;
              }
              else {
                counterChar+=arr[y];
              }
            }
          }
          if (main == true) {
            answer.push(counterNumber);
          }
          else answer.push(counterChar);
        }
      return answer;
    };
