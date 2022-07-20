# https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/ruby

# Given a string of words, you need to find the highest scoring word.

# Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

# You need to return the highest scoring word as a string.

# If two words score the same, return the word that appears earliest in the original string.

# All letters will be lowercase and all inputs will be valid.

def high(x)
  alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  biggest_word_weight = 0;
  biggest_word_index = 0;
  current_word_weight = 0;
  new_x = x.split(' ')

  new_x.each_with_index do |word, index|

    word.split('') do |char|
      current_word_weight += alphabet.index(char)
    end

    if current_word_weight > biggest_word_weight
      biggest_word_weight = current_word_weight;
      biggest_word_index = index;
    end

    p "#{word} #{current_word_weight}"
    current_word_weight = 0
  end

  new_x[biggest_word_index]
end

p high('man i need a taxi up to ubud') # taxi
