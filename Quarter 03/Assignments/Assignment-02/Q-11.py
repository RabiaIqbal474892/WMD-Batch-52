# Get a List

def collect_values():
    values = []  # Initialize an empty list
    
    while True:
        # Prompt the user to enter a value
        value = input("Enter a value: ")
        
        # Check if the input is empty
        if value == "":
            break  # Exit the loop if the input is empty
        
        # Add the value to the list
        values.append(value)
    
    # Print the list after exiting the loop
    print("Here's the list:", values)

# Run the function
collect_values()
