# https://www.codewars.com/kata/53af2b8861023f1d88000832/train/ruby


# Create a function which answers the question "Are you playing banjo?".
# If your name starts with the letter "R" or lower case "r", you are playing banjo!

# The function takes a name as its only argument, and returns one of the following strings:

# name + " plays banjo"
# name + " does not play banjo"
# Names given are always valid strings.


# describe "Basic Tests" do
#   it "should pass basic tests" do
#     Test.assert_equals(are_you_playing_banjo("Martin"), "Martin does not play banjo");
#     Test.assert_equals(are_you_playing_banjo("Rikke"), "Rikke plays banjo");
#     Test.assert_equals(are_you_playing_banjo("bravo"), "bravo does not play banjo")
#     Test.assert_equals(are_you_playing_banjo("rolf"), "rolf plays banjo")
#   end
# end

# def are_you_playing_banjo(name)
#   # Implement me!
#   #
#   #   - if name first char == R or r
#   #     - return name + " plays banjo"
#   #   - else
#   #     - return name + " does not play banjo"
#   #
#   #
#   if name.chr == 'R' || name.chr == 'r'
#     return name + ' plays banjo'
#   else
#     return name + ' does not play banjo'
#   end
# end
#
# 2nd Version
#
def are_you_playing_banjo(name)
  return "#{name} plays banjo" if name.chr == 'R' || name.chr == 'r'

  "#{name} does not play banjo"
end

p are_you_playing_banjo('Martin') == 'Martin does not play banjo'
