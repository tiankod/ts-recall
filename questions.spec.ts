"use strict";

describe("TypeScript-Recall", () => {

    it("selects elements starting with A", () => {
        const result: string[] = selectElementsStartingWithA(["bananas", "apples", "pears", "avocados"]);
        expect(result).toEqual(["apples", "avocados"]);
    });

    it("selects elements starting with a vowel", () => {
        const result: string[] = selectElementsStartingWithVowel(["john", "david", "omar", "fred", "idris", "angela"]);
        expect(result).toEqual(["omar", "idris", "angela"]);
    });

    it("removes null values from an array", () => {
        const result: any[] = removeNullElements(["a", "b", null, null, false, 0]);
        expect(result).toEqual(["a", "b", false, 0]);
    });

    it("removes null and false values from an array", () => {
        const result: any[] = removeNullAndFalseElements(["a", "b", null, null, false, 0]);
        expect(result).toEqual(["a", "b", 0]);
    });

    it("reverses the letters of each element in an array", () => {
        const result: string[] = reverseWordsInArray(["dog", "monkey", "elephant", "kayak"]);
        expect(result).toEqual(["god", "yeknom", "tnahpele", "kayak"]);
    });

    it("makes every possible pairing of students", () => {
        const result: string[][] = everyPossiblePair(["Jon", "Tyrion", "Daenerys"]);
        // sorted alphabetically
        expect(result).toEqual([
            ["Daenerys", "Jon"],
            ["Daenerys", "Tyrion"],
            ["Jon", "Tyrion"]
        ]);
    });

    it("takes all elements except the first 3", () => {
        const result: number[] = allElementsExceptFirstThree([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(result).toEqual([4, 5, 6, 7, 8]);
    });

    it("adds an element to the beginning of an array", () => {
        const result: number[] = addElementToBeginning([2, 3, 4, 5], 1);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it("sorts an array by the last letter of each word", () => {
        const result: string[] = sortByLastLetter(["Lannister", "Stark", "Greyjoy", "Targaryen"]);
        expect(result).toEqual(["Stark", "Targaryen", "Lannister", "Greyjoy"]);
    });

    it("gets the first half of a string", () => {
        const resultOne: string = getFirstHalf("dragon");
        const resultTwo: string = getFirstHalf("snake");

        expect(resultOne).toEqual("dra");
        expect(resultTwo).toEqual("sna");
    });

    it("makes numbers negative", () => {
        const resultOne: number = makeNegative(5);
        const resultTwo: number = makeNegative(-5);

        expect(resultOne).toEqual(-5);
        expect(resultTwo).toEqual(-5);
    });

    it("counts elements in an array that are palindromes", () => {
        const result: number = numberOfPalindromes(["kayak", "noon", "khaleesi", "hodor", "racecar", "abcbc", "abcba"]);
        expect(result).toEqual(4);
    });

    it("returns the shortest word in an array", () => {
        const result: string = shortestWord(["winter", "is", "coming"]);
        expect(result).toEqual("is");
    });

    it("returns the longest word in an array", () => {
        const result: string = longestWord(["A", "Lannister", "always", "pays", "his", "debts"])
        expect(result).toEqual("Lannister");
    });

    it("sums up the numbers in an array", () => {
        const result: number = sumNumbers([1, 3, 5, 6, 2, 8]);
        expect(result).toEqual(25);
    });

    it("repeats the elements of an array", () => {
        const result: string[] = repeatElements(["a", "b", "c"]);
        expect(result).toEqual(["a", "b", "c", "a", "b", "c"]);
    });

    it("turns a number string into a number", () => {
        const result: number = stringToNumber("3");
        expect(result).toEqual(3);
    });

    it("calculates the average of an array of numbers", () => {
        const result: number = calculateAverage([10, 15, 25]);
        expect(result).toEqual((10 + 15 + 25) / 3);
    });

    it("gets elements until greater than five", () => {
        const result: number[] = getElementsUntilGreaterThanFive([1, 3, 5, 4, 1, 2, 6, 2, 1, 3, 7]);
        expect(result).toEqual([1, 3, 5, 4, 1, 2]);
    });

    it("converts an array to an object", () => {
        const result: any = convertArrayToObject(["Jaime", "Lannister", "Robb", "Stark", "Joffrey", "Baratheon"]);
        const json: any = JSON.parse('{{firstName: "Jaime", lastName: "Lannister"},' +
                                      '{firstName: "Robb", lastName: "Stark"},' +
                                      '{firstName: "Joffrey", lastName: "Baratheon}}');
        expect(result).toEqual(json);
    });

    it("gets all letters in an array of words", () => {
        // returns sorted
        const result: string[] = getAllLetters(["cat", "dog", "fish"]);
        expect(result).toEqual(["a", "c", "d", "f", "g", "h", "i", "o", "s", "t"]);
        // deals with repeated letters
        const result2 = getAllLetters(["cat", "dog", "fish", "cat"]);
        expect(result2).toEqual(["a", "c", "d", "f", "g", "h", "i", "o", "s", "t"]);
    });

    it("swaps keys and values in an json", () => {
        const json1: any = JSON.parse('{{key: "Frodo", value: "Baggins"},' +
                                       '{key: "Samwise", value: "Gamgee"},' +
                                       '{key: "Gandalf", value: "The Gray"}}');
        const json2: any = JSON.parse('{{key: "Baggins", value: "Frodo"},' +
                                       '{key: "Gamgee", value: "Samwise"},' +
                                       '{key: "The Gray", value: "Gandalf"}}');
        const result = swapKeysAndValues(json1);
        expect(result).toEqual(json2);
    });

    it("adds together keys and values", () => {
        const json: any = JSON.parse("{5: 3, 1: 7 }");
        const result = sumKeysAndValues(json);
        expect(result).toEqual(16);
    });

    it("removes capital letters from a string", () => {
        const result: string = removeCapitals("Hello Kitty");
        expect(result).toEqual("ello itty");
    });

    it("rounds up a number", () => {
        const result: number = roundUp(4.3942);
        expect(result).toEqual(5);
    });

    it("formats a date nicely", () => {
        const result: string = formatDateNicely(new Date(2015, 3, 4));
        expect(result).toEqual("04/03/2015");
    });

    it("gets the domain name from an email address", () => {
        const result: string = getDomainName("spike@makersacademy.com");
        expect(result).toEqual("makersacademy");
        const result2: string = getDomainName("spike@ssh.makersacademy.com");
        expect(result2).toEqual("ssh.makersacademy");
    });

    it("titleizes a string", () => {
        const result: string = titleize("the lion the witch and the wardrobe");
        expect(result).toEqual("The Lion the Witch and the Wardrobe");
        const result2: string = titleize("the lion the witch. and the wardrobe");
        expect(result2).toEqual("The Lion the Witch. And the Wardrobe");
    });

    it("checks a string for special characters", () => {
        const resultOne: boolean = checkForSpecialCharacters("ABCdef123");
        const resultTwo: boolean = checkForSpecialCharacters("ABC@dsklfj!");

        expect(resultOne).toBe(false);
        expect(resultTwo).toBe(true);
    });

    it("finds the square root of a number", () => {
        const resultOne: number = squareRoot(9);
        const resultTwo: number = squareRoot(3);

        expect(resultOne).toEqual(3.0);
        expect(resultTwo).toEqual(1.7320508075688772);
    });

    it("finds the factorial of a number", () => {
        const result: number = factorial(5);
        expect(result).toEqual(120); // = 5 * 4 * 3 * 2 * 1
    });

    it("finds all possible anagrams of a word", () => {
        const result: string[] = findAnagrams("mad");
        const expectedAnagrams = ["adm", "amd", "dam", "dma", "mad", "mda"];
        for (const anagram of expectedAnagrams) {
            expect(result).toContain(anagram);
        }
        const result2 = findAnagrams("ma");
        const expectedAnagrams2 = ["am", "ma"];
        for (const anagram of expectedAnagrams2) {
            expect(result2).toContain(anagram);
        }
    });

    it("converts Fahrenheit to Celsius rounding to the nearest integer", () => {
        const resultOne: number = convertToCelsius(32);
        const resultTwo: number = convertToCelsius(55);

        expect(resultOne).toEqual(0);
        expect(resultTwo).toEqual(13);
    });

    it("changes each letter of an array into its position in the alphabet", () => {
        const result: number[] = letterPosition(["H", "e", "l", "l", "o", "k", "i", "t", "t", "y"]);
        expect(result).toEqual([8, 5, 12, 12, 15, 11, 9, 20, 20, 25]);
    });
});
