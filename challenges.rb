
def two_sum(nums, target)
  # loop over the array with first pointer
  # create a new loop from pointer to the array size
  # if first pointer + 2nd pointer = target
  # then return [1st pointer, 2nd pointer]
  (0...nums.size).each do |first_pointer|
    (first_pointer + 1...nums.size).each do |second_pointer|
      return [first_pointer, second_pointer] if nums[first_pointer] + nums[second_pointer] == target
    end
  end
end

# nums =
# [2,7,11,15]
# target =
# 9
# Expected
# [0,1]

# nums =
# [3,2,4]
# target =
# # 6
# Expected
# [1,2]

p two_sum([3, 2, 4], 6)
