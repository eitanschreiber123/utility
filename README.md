# Utility-Functions

A collection of random utility Functions

```
multipleFilter(multiple, ...number);
```
returns an array of the values in 'number' that are multiples of 'multiple'
'multiple' can be one value or an array of values in which case it will return an array for every value
<br/><br/>
```
greaterFilter(test, plus, ...value);
```
returns an array of the values in 'value' that are greater than test + plus
<br/><br/>
```
rangeFilter(min, max, ...value);
```
returns an array of the values in 'value' that are greater than min and less than max
<br/><br/>
```
typeFilter(type, ...test);
```
returns an array of the values in 'test' that are typeof 'type'
type can be one value or an array of values in which case it will return an array for every value
<br/><br/>
```
vip(cond, ...values);
```
returns an array of values in 'values' that pass the functions in 'cond'
'cond' can be one function or an array of functions in which case it will test if the value passes all of the functions
<br/><br/>
```
passNumber(number, ...predicates);
```
returns a function that returns it's arguments that pass the 'number' of functions in 'predicates'
<br/><br/>
```
paths(initial, condition, first, second);
```
returns a function that passes each of it's arguments through 'initial' and if it passes 'condition' then it calls 'first' on it otherwise it calls 'second'
'initial', 'condition', 'first', and 'second' can be one function or an array of functions in which case it will pass the value through each of the functions in order or for 'condition' it will test if it passes all of the functions
<br/><br/>
```
all(initial, condition, first, second);
```
like paths() except it checks if all of the arguments pass 'condition' then it calls 'first' on all of them otherwise it calls 'second'
<br/><br/>
```
any(initial, condition, first, second, number = 1);
```
like paths() except it checks if the 'number' amount of arguments pass 'condition' then it calls 'first' on all of them otherwise it calls 'second'
<br/><br/>
```
sameType(value);
```
returns a function that returns it's arguments that are of the same type as 'value'
<br/><br/>
```
addThis(number);
```
returns a function that adds 'number' to each of it's arguments, 'number' can be one value or multiple values in which case it will loop through them and add one to the corresponding argument  
<br/><br/>
```
inOrder(...functions);
```
returns a function that loops through 'functions' and calls one on each of it's arguments
<br/><br/>
```
allArgs(...indexes);
```
returns a function that returns the arguments at the indexes of 'indexes'
```
const testFunction = allArgs(2, 3); // testFunction is a function that every second and third argument
```
<br/><br/>
```
argsSkipping(...indexes);
```
returns a function that returns the arguments at the indexes of 'indexes', different from allArgs()
```
const testFunction = argsSkipping(2, 3); // testFunction is a function that alternates and returns the second then the third
```
<br/><br/>
```
results(...functions);
```
returns a function that calls each of the functions in 'functions' on it's arguments and returns an array of the results
<br/><br/>
```
sameSign(number);
```
returns a function that returns it's number arguments that are of the same sign (positive/negative) as 'value'
<br/><br/>
```
level(function, ...amount);
```
returns a function that splits it's arguments into groups with a length of amount and calls 'function' on each group and returns an array of the results, amount can be one or multiple numbers
<br/><br/>
```
levelAllCondition(initial, condition, first, second, ...amount);
```
returns a function that splits it's arguments into groups with a length of amount and calls 'initial' on them and if all of the elements in each group pass 'condition' then it calls 'first' on the group otherwise it calls 'second', 'initial', 'condition', 'first', and 'second' can be one function or an array of functions in which case it pass the value through each of the functions and for the condition it will test if the value passes all of the functions
<br/><br/>
```
levelAnyCondition(initial, condition, first, second, ...amount);
```
returns a function that splits it's arguments into groups with a length of amount and calls 'initial' on them and if any one of the elements in each group pass 'condition' then it calls 'first' on the group otherwise it calls 'second', 'initial', 'condition', 'first', and 'second' can be one function or an array of functions in which case it pass the value through each of the functions and for the condition it will test if the value passes all of the functions 
<br/><br/>
