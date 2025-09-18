# https://www.codewars.com/kata/54edbc7200b811e956000556/train/ruby

# Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts
# the number of sheep present in the array (true means present).

# For example,

# [true,  true,  true,  false,
#   true,  true,  true,  true ,
#   true,  false, true,  false,
#   true,  false, false, true ,
#   true,  true,  true,  true ,
#   false, false, true,  true]
# The correct answer would be 17.

# Hint: Don't forget to check for bad values like null/undefined

def count_sheep(array)
  # May the force be with you
  #
  # define a counter
  # loop over the array
  #   - if value == true then increse counter by 1
  #   - else you should do nothing

  # Version 1
  # sheep_counter = 0
  # array.each { |element| sheep_counter += 1 if element == true }

  array.count(true)
end

p count_sheep([true,  true,  true,  false,
   true,  true,  true,  true ,
   true,  false, true,  false,
   true,  false, false, true ,
   true,  true,  true,  true ,
   false, false, true,  true])
