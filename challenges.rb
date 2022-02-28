# https://www.codewars.com/kata/555eded1ad94b00403000071/train/ruby

def series_sum(n)
  sum = []
  denominator = 4;
  
  # Need to be optimized (include it in the for loop)
  return '0.00' if n == 0
  return '1.00' if n == 1
  
  # Proccessing the Sum array that contains the series
  for i in 1..n
    rat = Rational(1, denominator)
    if i == 1
      sum.push(1)
    else
      sum.push(rat)
      denominator += 3;
    end
  end

  puts sprintf('%.2f', sum.sum)
end

series_sum(3)
