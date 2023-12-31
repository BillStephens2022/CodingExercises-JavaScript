# JavaScript Coding Exercises

## Description
Just some handy JavaScript functions/algorithms to solve some popular coding problems.

## 'FizzBuzz' Example:

### Solution1 (the common solution):

```
const fizzBuzz = (n) => {
    const answer = [];
    for (let i = 1; i <= n; i++) {
        if ((i % 5 === 0) && (i % 3 === 0 )) {
            answer.push("FizzBuzz");
        } else if (i % 5 === 0) {
            answer.push("Buzz");
        } else if (i % 3 === 0) {
            answer.push("Fizz");
        } else {
            answer.push(i.toString());
        }
    }
    return answer;
};
```

### Solution2 (the more fun solution):
```
const fizzBuzz2 = (n) => {
    const answer = [];
    for (i = 1; i <=n; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        answer.push(output || i.toString());
    }
    return answer;
}
```

