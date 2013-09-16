noderomannumeral
================
Converts an integer to a roman numeral
Value passed to function must be an integer
Values must be between 1 and 3999 inclusive

Drawbacks to approach
=====================
This approach, although easy to update
could get very time consuming to update 
with larger numbers. 

I intially tried something that divided each 
unit by 5 and then used the % of the number to 
add an appropriate number of Is Xs etc depending
on where it sat in the units/tens/hundreds etc.
And that wasn't scaling well either as I had to 
keep saying if this then V + I and so on and so on 

This didn't really work out and so I thought
this approach at least works!