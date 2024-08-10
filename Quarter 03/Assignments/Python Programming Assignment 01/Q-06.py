# String Splitting and Joining

s:str ="apple,banana,cherry,dates"

# break the string into a list of substrings based on the delimiter ,
s_list : list[str] = s.split(",")

# combine the list of substrings back into a single string, with each element separated by a space
s_joined : str = " ".join(s_list)

# Output the results
print(s_list)
print(s_joined)
