# # https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/ruby

# Alex just got a new hula hoop, he loves it but feels discouraged because 
# his little brother is better than him

# Write a program where Alex can input (n) how many times the hoop goes round and 
# it will return him an encouraging message :)

#     If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
#     If he doesn't get 10 hoops, return the string "Keep at it until you get it".

def hoop_count n
	if (n >= 10) then return "Great, now move on to tricks" end
  "Keep at it until you get it"
end

# other solution from the community
# def hoop_count(n) n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks"; end