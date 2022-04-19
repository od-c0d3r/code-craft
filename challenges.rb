# https://www.codewars.com/kata/517abf86da9663f1d2000003/train/ruby

# Complete the method/function so that it converts dash/underscore delimited words 
# into camel casing. The first word within the output should be capitalized only 
# if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
# Examples

# "the-stealth-warrior" gets converted to "theStealthWarrior"
# "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

# def to_camel_case(str)
#   str.split(/[\-||\_]/).each_with_index.map { |word, index| index == 0 ? word : word.capitalize }.join('')
# end


# other solu

def to_camel_case(str)
  str.gsub(/[_-](.)/) {"#{$1.upcase}"}
end

p to_camel_case("the_stealth_warrior") # , "ABC"