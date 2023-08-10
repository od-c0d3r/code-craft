# https://www.codewars.com/kata/51b66044bce5799a7f000003/train/ruby

# to be continue

# # TODO: create a RomanNumerals helper class

class RomanNumerals
  ROMAN_SYSTEM = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  }

  def self.to_roman(num)
    # convert argument to integer
    number = num.to_s
    puts "#{number}, #{number.class}"

    # create a hash containg the system keys values.
#     ROMAN_SYSTEM.each { |roman, value| puts value}

    number.each_char.with_index do |char, index|
      puts "#{char} * 10^#{number.length - index - 1}"
    end
    # loop over every key system, for each loop:
    #   devide by the system key value.
    #     if >= 1 where it is x then put the value in the result
    #     if < 1 than move to the next/down loop/level/sysyem key.
    #  create a funtion to change any letter from 4 time to 3 times + 1 time special characters
    # return the result
  end

  def self.from_roman(str)
  end
end


# 743 / 500 = CCC

# more than 1
# or
# 1
# or
# less than 1

# DCCXXXXIII

