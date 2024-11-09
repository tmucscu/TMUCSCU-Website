# Help format the bios for events.json

import pyperclip

def convert_to_single_line(text):
    # Replace new lines with "\n"
    single_line_text = text.replace("\n", "\\n")
    return single_line_text

# Define the file path as bio.txt
file_path = "bio.txt"

# Read text from bio.txt with UTF-8 encoding
try:
    with open(file_path, "r", encoding="utf-8") as file:
        text = file.read()

    # Convert to single-line format
    result = convert_to_single_line(text)

    # Copy result to clipboard
    pyperclip.copy(result)
    print("The text from bio.txt has been copied to your clipboard!")
except FileNotFoundError:
    print("The file bio.txt was not found. Please make sure it exists in the same directory as this script.")
except UnicodeDecodeError:
    print("Error reading bio.txt. Please ensure it is saved with UTF-8 encoding.")
