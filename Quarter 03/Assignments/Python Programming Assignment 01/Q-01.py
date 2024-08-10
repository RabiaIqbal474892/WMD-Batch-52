# Age Assignments Based on the Riddle

# Given age of Anton
anton_age : int = 21

# Calculate ages based on the given relationships
beth_age : int = anton_age + 6
chen_age : int = beth_age + 20
drew_age : int = chen_age + anton_age
ethan_age : int = chen_age

# Output the results
print(f"Anton is {anton_age}")
print(f"Beth is {beth_age}")
print(f"Chen is {chen_age}")
print(f"Drew is {drew_age}")
print(f"Ethan is {ethan_age}")
