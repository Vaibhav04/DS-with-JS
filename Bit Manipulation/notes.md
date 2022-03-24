# Properties of 
1. LSB(least significant bit) of an even number is set to 0.
2. LSB(least significant bit) of an odd number is set to 1.
   - Dividing it by 2 result in losing of 1 bit
4. Divide a number by 2 means right shifting the number by 1 bit.
5. Subtracting 1 from a decimal number flips all the bits after the rightmost set bit(which is 1) including the rightmost set bit. 

# XOR 
1. The logic behind doing XOR is that when 2 same numbers are XORed they result in 0.Also, 0^num = num.