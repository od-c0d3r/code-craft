# https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/ruby
def number lines
  lines.map.with_index(1) { |line, index| "#{index}: #{line}"}
end

number(['line 1','line 2','line 3','line 4'])

# Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
# 
# Write a function which takes a list of strings and returns each line prepended by the correct number.
# 
# The numbering starts at 1. The format is n: string. Notice the colon and space in between.
# 
# Examples:
# 
# number [] # => []
# number ["a", "b", "c"] # => ["1: a", "2: b", "3: c"]

# what i used to solve the problem
# https://stackoverflow.com/questions/4697557/how-to-map-with-index-in-ruby
# https://www.rubyguides.com/2019/07/ruby-string-concatenation/