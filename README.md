# Dad Joke Project

Query the dad joke API documented below and display the resulting jokes in a list.

Documentation for the API:
https://icanhazdadjoke.com/api#search-for-dad-jokes

View the app here:
https://htmlpreview.github.io/?https://github.com/toterakn/search-engine/blob/main/search-engine/build/index.html

Notes:
Opening the app via index.html didn't work because Webpack was trying to load the static files from the root of my file system rather than my build directory. In order to fix this, all I had to do is add the following to my package.json file

"homepage":".",