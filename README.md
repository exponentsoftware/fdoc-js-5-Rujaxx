## DAY 5
1. Use the countries API to fetch data about countries. (5 pt)

      ```js
      const API_URL = 'https://restcountries.eu/rest/v2/all'
      ```

    Use the countries API to fetch data about countries.

    - How many languages are there in the countries API
    - Find the 15 most spoken languages

    ```sh
    [
    {language: "English", countries: 91}
    {language: "French", countries: 45}
    {language: "Arabic", countries: 25}
    {language: "Spanish", countries: 24}
    {language: "Portuguese", countries: 9}
    {language: "Russian", countries: 9}
    {language: "Dutch", countries: 8}
    {language: "German", countries: 7}
    {language: "Chinese", countries: 5}
    {language: "Serbian", countries: 4}
    {language: "Swahili", countries: 4}
    {language: "Italian", countries: 4}
    {language: "Swedish", countries: 3}
    {language: "Albanian", countries: 3}
    {language: "Croatian", countries: 3}
    ]
    ```

    - Find the 10 most largest countries

    ```sh
    [
    {country: "Russian Federation", area: 17124442}
    {country: "Antarctica", area: 14000000}
    {country: "Canada", area: 9984670}
    {country: "China", area: 9640011}
    {country: "United States of America", area: 9629091}
    {country: "Brazil", area: 8515767}
    {country: "Australia", area: 7692024}
    {country: "India", area: 3287590}
    {country: "Argentina", area: 2780400}
    {country: "Kazakhstan", area: 2724900}
    ]
    ```

2. Explain the following questions in your own words

What is the difference between forEach, map, filter and reduce ? Explain these using your own words // forEach = The forEach method passes a callback function for each element of an array map = This method takes in a callback function which gets called for every new element it iterates over. filter = The filter method takes in a callback function and calls that function for every item it iterates over inside the target array.

Explain the difference between function declaration and arrow function ? // Function declaration = function doSomething() {},Function declarations are hoisted,The function declaration (function statement) defines a function with the specified parameters. Arrow Fuction = ()=>doSomething, Arrow functions intend to fix the problem where we need to access a property of this inside a callback,it does not bind its own this.

Explain the difference between find and findIndex ? // Find = find() method returns the value of the first element in an array that passes a given test. FindIndex = findIndex() returns the index of the first element in the array that satisfies the given test.

If you like to filter out one object element in an array which method do you like to use: filter or find ? Explain // Both are good.

Explain the difference of var, let and const when we declare a variable ? // var = variables are function-scoped because their visibility is limited to the function. When you try to use it outside of the function, you’ll get an error. let = Same as var but block scope const = Const variables are cannot be updated or redeclared.