# https://www.codewars.com/kata/514a024011ea4fb54200004b/train/ruby

# Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

# * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
# * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
# * url = "https://www.cnet.com"                -> domain name = cnet"

def domain_name(url)
    p url
      if url.include?("//") || url.include?("www") then
          p split1 = url.split("//")
          if split1[0].include? 'www' then return split1[0].split('.')[1]; end
          if split1[1].include? 'www' then return split1[1].split('.')[1]; end
          return split1[1].split('.')[0]
      end
      url.split(".")[0]
  end

p domain_name("http://google.com")# "google")
p domain_name("http://google.co.jp")#, "google")
p domain_name("www.xakep.ru")#, "xakep")
p domain_name("https://youtube.com")##, "youtube")
p domain_name("http://www.codewars.com/kata/")##, "codewars")
p domain_name("https://wzvno.biz")##, "wzvno")

# com sol

# def domain_name(url)
#   URI.parse(url).host.split('.').last(2)[0]
# end
