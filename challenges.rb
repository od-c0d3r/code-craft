# # https://www.codewars.com/kata/51edd51599a189fe7f000015/train/ruby
# Complete the function that

# accepts two integer arrays of equal length
# compares the value each member in one array to the corresponding member in the other
# squares the absolute value difference between those two values
# and returns the average of those squared absolute value difference between each member pair.
# Examples

# [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
# [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
# [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

def solution(arr1, arr2)
  # Allocate a new arary based on one of the arraies length
  # Make a loop from Zero to array length
  #   Access each value using the index in both arrays
  #   Make the math of (x - y)^2
  #   Store the value in the new array using the index
  # Make a loop on the result array to get the avg.
  #
  #
  #
  # result = Array.new(arr1.length) { |index| index }

  # result.reduce(0) { |memo, index|
  #   p memo
  #   p index
  #   memo + ((arr1[index] - arr2[index])**2)
  # }
end

solution([1, 2, 3], [4, 5, 6]) # 9
# p solution([10, 20, 10, 2], [10, 25, 5, -2]) # 16.5
# p solution([-1, 0], [0, -1]) # 9
