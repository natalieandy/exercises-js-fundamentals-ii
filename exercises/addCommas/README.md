# Add Commas to a Number

We're going write a function `addCommas` that takes a non-negative integer as input and returns a string representation with commas inserted in the appropriate places.

For example:

```javascript
addCommas(100);       // => '100'
addCommas(5491);      // => '5,491'
addCommas(12345);     // => '12,345'
addCommas(987654321); // => '987,654,321'
```

## Start Simple

Remember to start with simple examples! Do several examples by hand, i.e., with pen and paper and no computer. How do you know when you don't need to insert any commas? How do you decide when to insert a comma? Are you scanning the decimal from left-to-right or right-to-left?

It's hard not to "cheat" by using human superpowers that computers don't have. For example, if I gave you a number like `56102`, you can probably tell it's 5 digits at a glance. A computer can't do that.

To stop yourself from "cheating" like this, it helps to imagine an example that is beyond what you can do without thinking. For example, where should the commas go in the following number?

```text
637845925428165426740239082924227468032105448290333123168404967937021010606843289731069134621034473311783067897
```

I bet you could do it, but there's no way you're going to do it by taking a quick glance at the number. Whatever you're doing in this situation, can you make a computer do the equivalent?
