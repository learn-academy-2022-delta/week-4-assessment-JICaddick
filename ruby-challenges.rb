# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_or_odd(num)
    if num.even?
        "#{num} is even"
    else 
        "#{num} is odd"
    end
end

p even_or_odd(num1)
p even_or_odd(num2)
p even_or_odd(num3)
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowels_out (string)
    result = string.delete("aeiou")
    return result
end

p vowels_out(album1)
p vowels_out(album2)
p vowels_out(album3)



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def is_palindrome (string)
    string.downcase!
    if string == string.reverse
        "Yes, #{string} is palindrome"
    else 
        "No, #{string} no is palindrome"
    end
end

p is_palindrome(palindrome_tester1)
p is_palindrome(palindrome_tester2)
p is_palindrome(palindrome_tester3)

