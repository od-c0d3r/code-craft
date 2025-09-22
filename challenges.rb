# https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/ruby
#
# Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

# Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

# If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

# Examples

# "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
# "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
# ""  -->  ""
#
# Solution =>
#
# Inputs:
#   1. String with injected numbers (1-9) within its words.
#
# O/P :
#   1. Sorted String bassed on the numbers
#   2. Empty string if i/p string is empty
#
# Process :
#   1. Return empty string if i/p string is empty
#   2. Create a new array
#   3. Loop over each word
#   4. Extract the number from the word
#   5. Allocate the word in the new array bassed on the (number - 1)
#   6. Return the new array

def order(words)
  # return '' if words.empty?

  # result = []

  # words.split.each do |word|
  #   num = word.match /[0-9]/
  #   indexed_num = num.to_s.to_i - 1

  #   result[indexed_num] = word
  # end

  # result.join ' '

  # 2nd version
  #
  words.split.sort_by { |word| word[/\d/] }.join ' '
end

p order ''
