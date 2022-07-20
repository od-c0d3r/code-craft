# https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/ruby

# Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

# invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
# invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
# invert([]) == []

# You can assume that all values are integers. Do not mutate the input array/list.

def invert(list) ist.map {|num| num *-1}; end

p invert([1,2,3,4,5])   #,[-1,-2,-3,-4,-5])
p invert([1,-2,3,-4,5]) # ,[-1,2,-3,4,-5])
p invert([0])           #,[0])
p invert([-1,0,1])      #,[1,0,-1])
p invert([])            #,[])
