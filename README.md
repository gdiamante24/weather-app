# weather-app
A simple information web app for tourists.This page aims to provide travel information of Japan for foreign tourists visiting Japan for the first time.

Setup
------------
Requirements:
1.Github account
2.Gitbash
3.Node.js or npm for installing all the dependencies and modules needed.

-Clone the Repository
     git clone https://github.com/gdiamante24/weather-app.git
-go to the root directory and run "npm install" from the command line. 
     $npm install

     -all of the modules should automatically install.

-Run the app
     $npm start

     it should open the app automatically on the browser.


UI and UX implementation
------------
I opted for a clean look and a simple color scheme for simple but neat look. Just like how Japanese people do their craft. I used REACTJS as my framework along REACTSTRAP.

These are the requirements that are met:

1.Use OpenWeatherMap'sDaily API for to get weather forecast.
    #You need to create a OpenWeatherMap account(Free).
    Doc.
     https://openweathermap.org/forecast5
    Ex.
     https://api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

     -I used openweathermap.org's api for the forecast and to get the current weather data also. I displayed all the relevant data that a tourist might want to know when checking the weather. 
     -I made some changes in the params to make it metric because the Japanese people uses the metric system more than the imperial. 
     
2.Use foursquare Search Venue API for to get Place information
    #You need to create  a foursquare account(Free).
    Doc.
     https://developer.foursquare.com/docs/api/venues/search
    Ex.
     https://api.foursquare.com/v2/venues/search?near=Osaka,JP&limit=5&categoryId=4deefb944765f83613cdba6e

     -I used foursquare's api to show the attractions on that particular city.

3.Responsive Design
     I used reactsrap for my grid system. It works well with react because it already has components that are fully customizeable.


