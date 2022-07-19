# https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/ruby

# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.

def find_short(s)
    l = 100
    s.split(" "){ |word| l = word.length if l > word.length }
    l
end

# find_short("bitcoin take over the world maybe who knows perhaps") > 3

puts find_short("Do We have aaaaaa Hashtag") #1
