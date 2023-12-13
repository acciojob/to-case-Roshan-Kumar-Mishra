function toCase(inputString) {
    // Check if the input string is empty
    if (!inputString) {
        return "";
    }

    // Convert the string to lowercase and uppercase
    const lowercaseString = inputString.toLowerCase();
    const uppercaseString = inputString.toUpperCase();

    // Combine the lowercase and uppercase strings with a hyphen as the delimiter
    const resultString = lowercaseString + '-' + uppercaseString;

    return resultString;
}

// Example usage:
// const inputString = "HelloWorld";
// const result = toCase(inputString);
// console.log(result);

