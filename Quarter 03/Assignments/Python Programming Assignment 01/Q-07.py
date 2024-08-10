# String Stripping and Justifying

s:str ="   Python is fun!   "

# Remove leading and trailing spaces
s_trimmed : str = s.strip()

# left justify the string within a field of width 20, using * as the fill character
s_left_justified : str = s_trimmed.ljust(20, '*')

# right justify the string within a field of width 20, using * as the fill character
s_right_justified : str = s_trimmed.rjust(20, '*')

# Output the results
print(s_trimmed)
print(s_left_justified)
print(s_right_justified)
