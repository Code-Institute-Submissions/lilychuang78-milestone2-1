![Sanxiantai](assets/images/readme/sanxiantai.jpg)

# **#Discover Taiwan Website**

## Introduction
This is the repository for **#Discover Taiwan** website.
The deployed version of the website can be found [here](https://lilychuang78.github.io/milestone2-1/.).<br/>
This website is to give background information about Taiwan and trigger users' interest to want to visit Taiwan one day in the future.</br>
General information people might be interested are shown in the content. For instance, the location of Taiwan, climate, population, language, culture and business and such.<br/>
For people who are further interested in visiting Taiwan, I believe cuisine and attraction are the most interesting topics people would want to find out. Therefore, there are two separate sections specifically for these purposes.<br/>
The website is responsive and can be navigated within the website with different devices.

## User Stories
1. As a user, I want to navigate the website without problems.
2. As a user, I want to find out information about Taiwan.
3. As a user, I want to know what type of cuisines is famous in Taiwan.
4. As a user, I want to know what attractions and where in Taiwan are worth visiting.
5. As a user, I want to be able to leave a comment or question using a contact form.
6. As a user, I want to know if the website has external links to social media.

## Design
1. Hero images are presented with a slide show effect to attract user's attention and to display the scenery of Taiwan.
2. The white and tropical plant pattern background is chosen to symbolize the warm and moist climate of Taiwan.
3. The navigation bar and background of sections are unified with white and gray colors to keep it simple and sophisticated.
4. Google font family "Castoro" is used as the font throughout the website. When it is not available "serif" is replaced.

## Wireframe
The skeleton plane was created using Balsamiq Wireframes.
<img src="wireframe.png" alt="wireframes"/>

## Features
1. Navigation bar allows users to click and jump to different sections of the website without having to scroll down the pages. When the display is small as a smartphone, a drop down menu is displayed in the navigation bar.
2. Hero images are presented with a slide show effect to display different scenery of Taiwan so the user can have a picture in mind when they read through the website.
3. Info sections enables the users to know about Taiwan with general information:
    - Location: an interactive Google map is presented so the users can move the map to correlate the location of Taiwan and the surrounding countries. A paragraph explaining where Taiwan is also presented.
    - Climate: an interactive weather API is presented so the users can type in the cities in Taiwan to find out the real-time local temperature and weather. A paragraph about general climate information is also provided so the users can discover the general climate details in Taiwan.
    - Population: an interactive chart of population growth is presented so the users can move the cursor and see the exact population from 1951 to 2019 with a ten-year interval. A detailed paragraph about the population, density, ancestry DNA and ethnicity is provided.
    - Language: a paragraph about languages people used in Taiwan is provided. A Google translation API is added in this section so the user can see how this website in traditional Chinese looks like. It is possible to convert the website back to English.
    - Culture: a YouTube video for the user to click and view is about aboriginal people's harvest festival. A detailed paragraph about various culture backgrounds is provided.
    - Business: an interactive chart about Taiwan ranking as the best Expat destination in 2019 by Expat Insider survey is presented, so the users can check what are the satisfaction ration in comparison to the world average scores. A paragraph about big cooperation in Taiwan and why Taiwan is ranked number one in Expat Insider 2019 survey is explained.
4. Cuisine section contains general information about why Taiwanese food is so special and it got the influences from different background throughout the history. A display of images are followed and the users are able to click and zoom in to see bigger pictures and the names of the cuisines.
5. Attraction section contains a big Google Map, the attractions sights are spread over the island. The most preventative places are shown with markers. When the users click on the marker, an info window is displayed with the name, an image and a short description of the place. A link to an external website called "Taiwan - The Heart of Asia" is provided in case the users would like to search more details about certain attractions. The users are able to click close of the info windows.
6. Contact section contains a form for the users to contact the website owner in order to leave a comment or a question. The placeholder of message input changes after the users click submit button. An alert shows up when the email format is incorrect. [(see)](assets/images/readme/email_alert1.png)
7. The footer contains social media icons which allows the users to click and open external social media websites.
8. A go-to-the top icon is on the right bottom corner, which allows the user to go back to the top without having to scroll all the way up.
9. Responsive design are used with Bootstrap grid throughout the website to adapt different size of devices.

## Development Tools
### Languages
1. HTML: HTML5 is used to structure the website.
2. CSS: it is widely used to style the website.
3. JavaScript: it is used for interactive purposes of the website.
    - hero image slide show
    - Google Maps
    - real time weather app
    - Google Translate
    - Interactive charts
    - contact form
    - go to the top button
### Libraries
1. [Bootstrap 4](https://getbootstrap.com/docs/5.0/getting-started/introduction/): Bootstrap class are used throughout the website. Bootstrap grid is used to implement responsive display on different devices.
2. [FANCYBOX](https://fancyapps.com/fancybox/3/): it is used to display cuisine images and allows the users to click to see a bigger picture. It is also used to allow the users to click and view a YouTube video in the section "Info", subsection of "Culture".  
3. [Font Awesome](https://fontawesome.com/): it is used to import icons including go-to-top and social media icons.
4. [Google Fonts](https://fonts.google.com/): Google fonts "Castoro" is imported.
5. [Google Maps](https://developers.google.com/maps/documentation): Google Map API is implemented to display maps, customized marker, and info windows in one of the maps.
6. [Google Translate](https://cloud.google.com/translate/): Google Translation API is implemented with an option of traditional Chinese so the users can discover how traditional Chinese looks like. It is possible to switch back to English by clicking "show original".</br>
![show original](assets/images/readme/show_original_bar.png)
7. [jQuery](https://jquery.com/): it is used to allow the users to go to the top of the page by clicking a double up icon.
8. [OpenWeather](https://openweathermap.org/): it is used to allow the users to search real time weather in the section of "Info", subsection "Climate".
### Other
1. [Balsamiq Wireframes](https://balsamiq.com/): it is used to design the wireframe of the website.
2. [BeutifyTools](http://beautifytools.com/): it is used to beautify the code structure of HTML, CSS and JavaScript files.
3. [GitHub](https://github.com/): it is used to store the code and deploy the website to the internet.
4. [Gitpod](https://gitpod.io/workspaces/): it is used to write the code and add, commit and push to the GitHub by using git commands. Also it is used to preview the website temporarily.
6. [Unsplash](https://unsplash.com/): Images are taken from Unsplash with credit written.
7. [Wikipedia](https://en.wikipedia.org/wiki/Main_Page): general information are taken from Wikipedia website.
8. [Google Images](https://images.google.de/): some images are taken from Google Image which are filtered with "creative common license". ![create common license](assets/images/readme/google_image.png)

## Testing
1. [W3C Markup Validation Service](https://validator.w3.org/) is used to examine whether there is any HTML and CSS syntax error with "input by text" option. See the validation of [HTML](assets/images/readme/html_checker.png) and [CSS](assets/images/readme/css_checker.png).
2. [Google Chrome Developer Tool](https://developers.google.com/web/tools/chrome-devtools) is used to temporarily test and design the structure and style of the website.
3. User Stories
    - I am able to navigate through the website using navigation bar without difficulties.
    -  General information about Taiwan can be found when clicking on the "Info" in the navigation bar.
    - Different information is found by clicking on the tab menu of "Location, Climate, Population, Language, Culture and Business". I gain overall information about Taiwan.
        - In Location section, a map can be zoomed in or out and moved around to see where Taiwan is, correlate to my current location [(see)](assets/images/readme/location_map.png). I am able to find out where exactly Taiwan is.
        - In Climate section, a city name such as Taipei can be entered and the real time weather is displayed [(see)](assets/images/readme/search_weather.png). I am able to search the current weather of any cities. I can see the temperature, weather, and a weather icon of that city.
        - In Population section, the exact number of population when moving the cursor to the dot of the chart is shown [(see)](assets/images/readme/population.png). I am able to see the trend of population growth easily with the linear chart.
        - In Language section, the website can be translated using Google translation with traditional Chinese option. [(see)](assets/images/readme/translation1.png) And the website can be reverted to English by clicking "show original" [(see)](assets/images/readme/translation2.png). The automatically appeared bar can be removed by clicking x icon.
        - In Culture section, I am able to understand the culture of Taiwan by reading the description and even more by watching an YouTube video [(see)](assets/images/readme/video.png). And I am able to close the video by clicking x icon when I don't want to watch anymore.
        - In Business section, both Taiwan and Global scores in Expat Insider survey in the chart can be displayed when the cursor hovers over [(see)](assets/images/readme/business.png). I am able to compare the scores of Taiwan and Global, which are easily distinguishable because of the presented green and red color bars.
    - Cuisines images can be zoom in. I can see the name of the cuisines. The images can be displayed as a slideshow, full screen and further zooming to see the details of the cuisines. When I want to go back to the page, I can close it by clicking close x icon.
    - In Attraction section, markers on the Google Map are clickable. An info window shows up. I am able to see the name of the place, image and description of the place [(see)](assets/images/readme/infowindow.png). A link is provided to link to an external website and opens a separate touristic webpage, so I can search more information by entering keywords. When I want to see other info window of other places, I have to close the window first, otherwise they might be overlapped. The info window can be closed by clicking the x icon.
    - The contact form can be used only when all the input sections are all filled and with a correct formatted email, then the form can be sent. Otherwise, there are alerts which reminds me not to leave an empty or invalid entry. [See](assets/images/readme/email_alert1.png) and [here](assets/images/readme/email_alert2.png) of the alerts.   
    - The social media icons can link to separate webpage of the social media website, instead of replacing the current webpage.
4. Lighthouse, a Google Chrome extension was downloaded and is used to test the accessibility [(see)](assets/images/readme/lighthouse.png).
5. Google Chrome Developer Tool was used to test whether the website is displayed as wished in different devices.
    - Moto G4
    - Galaxy S5
    - Pixel 2
    - Pixel 2 XL
    - iPhone 5/SE
    - iPhone 6/7/8
    - iPhone 6/7/8 Plus
    - iPhone X
    - iPad
    - iPad Pro
    - Surface Duo
    - Galxy Fold
    - DELL Laptop Latitude 5490 
6. Manual Testing
    - Navigation bar: I am able to click on all the menu and am able to direct to different sections of the website. "**#DiscoverTaiwan**" function as the home page button. The navigation bar always remains at the top of the screen. I am able to click on any menus to redirect when I am at anywhere of the webpage.
    - Hero image slideshow: The slideshow consists of four images. They change smoothly without any loading issues.
    - Info tabs: I am able to click on every tab and the content change without issues.
        - Location: The Google Map is loaded without issues. I can zoom in and out and center the map to other location. When I hover the cursor to the marker. A message of "I am here!" is shown. There is a link to Wikipedia with specific content relating to the location of Taiwan. It can be open with separate website so the current website remains and is not replaced.
        - Climate: I can enter any cities in the "Check the Weather" app. It does not have to be a city in Taiwan, although the placeholder suggests the users to enter "Taipei". After entering the name of the city, the city name, current temperature, weather, and weather icon are displayed beneath. When I enter another city name, the current city name is replaced without any issues. There is a link to Wikipedia with specific content relating to the climate of Taiwan. It can be open with separate website so the current website remains and is not replaced.
        - Population: When I hover the cursor to the dots of the chart, an info window with population data and correspondent year appears. There is a link to Wikipedia with specific content relating to the population of Taiwan. It can be open with separate website so the current website remains and is not replaced.
        - Language: I can translate the website to traditional Chinese using Google Translate. Google Translate bar appear at the top of the screen, which allows me to revert the website back to English. However, I have to click the close icon to close the bar in order to see the navigation bar again. There is a link to Wikipedia with specific content relating to the language of Taiwan. It can be open with separate website so the current website remains and is not replaced.
        - Culture: An YouTube video is displayed when I click on the image with a hint of "Click the image to view a video!" beneath. I am able to terminate the video by clicking the close x icon. The webpage remains at the same location without being refreshed. The same video can be directed and opened in a separate website when clicking on the link beneath as well. There is a link to Wikipedia with specific content relating to the culture of Taiwan. It can be open with separate website so the current website remains and is not replaced.
        - Business: When I hover the cursor to the bars of the chart, an info window with labels and scores are displayed. Two links directing to Wikipedia and The News Lens are opened into separated websites by clicking, which do not replace the current web page.
        - Cuisine: When I hover the cursor on the images of cuisine, the cursor icon automatically changed to "zoom in" icon. When I click on the image, the image becomes bigger and center on the desktop with a transparent gray background. There is a name of the cuisine beneath the image. On the top left, I can see how many images are there and the current order number of the selected image. In the top right corner, I can use "display slideshow", "share", "zoom", "full screen" and "close" functions provided by FANCYBOX API. On the right side of the screen, all the images are displayed, so I can click on any of them to view and use the mentioned functions. When I close the zoomed in image, the webpage goes back to the page without being refreshed.
    - Attraction: When I click on "Geography" and "Satellite" view on the left top corner of the map, the map changed itself into geographic and satellite views without issues. When I click on the "display full screen" icon which is in right top corner of the map, the map can be displayed full screen. I click on the markers of the map, I can view an info window that contains an image, the name of the place, description of the place and a link to an external webpage called "The Heart of Asia" without any issues. I have to close the info window by clicking the close x icon, otherwise the info window is overlapped. The screen moves slightly downward whenever I close an info window, so I use the cursor to move the map. I am able to zoom in and zoom out the map using + and - icon. Also moving the map to center different location is possible. The small person icon on the left bottom corner allows me to view street view. 
    - Contact: The contact form has placeholder of "Name", "Email" and "Any questions about Taiwan is welcome!", so I am able to understand what I enter in which input box. I have to enter every input in order to send out the form, otherwise a message is displayed to remind me not to leave the entry empty. I also have to enter a valid email address with @ sign, or an alert of "Please enter a valid email address." is also shown on the top of the desktop. After I submit the form, the placeholder of "Any questions about Taiwan is welcome!" changes to "your message is received.". The submitted form content is redirected to my email address via Email.js service automatically without any issues.
    - Footer: There are three social media icons in the footer, which re-direct to separated webpages of Facebook, Instagram and YouTube respectively. They do not replace the current webpage.
    - Go-back-to-top button. The go-back-to-top button is located on the right button of the page. When I scroll the page, the icon remains on the same position. When I click the icon, the page scrolls back to the top, which has the same function when clicking "#Discover Taiwan" as a home button.

## Deployment
1. In the GitHub repository of [milestone2-1](https://github.com/lilychuang78/milestone2-1), click on "Setting".![setting](assets/images/readme/deploy1.png)
2. In the section of GitHub Pages and subsection of "Source", select "main" as branch and save.![main](assets/images/readme/deploy2.png)
3. The page is refreshed. Go back to the section of GitHub Pages and find the deployed address.![deployed](assets/images/readme/deploy3.png) 

## Credit
### Code
1. The code of hero image slide show is referred from [CSS Tricks](https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/).
2. The code of cuisine images zooming in is referred from [CodePen](https://codepen.io/fancyapps/pen/vzoPMB?editors=1010*/).
3. The code of Google Maps
    - The Location section is referred from [Google Maps Platform](https://developers.google.com/maps/documentation/javascript/overview)
    - The Attraction section is referred from the tutorial of Eamonn Smyth ["How to google maps"](https://code-institute-room.slack.com/files/UU5GBNS6M/F01DRAEPEH5/how_to_google_maps.pdf).
4. The code of OpenWeather API is referred from [CodePen](https://codepen.io/tutsplus/details/gObLaEP) and [envatotuts+](https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893).
5. The code of Google Translation API is referred from [w3school](https://www.w3schools.com/howto/howto_google_translate.asp).
6. The code of go-back-to-top button is referred from [w3school](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp).
### Content
1. The data of population is referred from [Department of Household Registration, Taiwan](https://www.ris.gov.tw/app/portal/346).
2. The data of Expat Insider 2019 is referred from [InterNations](https://www.internations.org/press/press-release/expat-insider-2019-survey-reveals-the-best-and-worst-destinations-to-live-and-work-in-2019-39881).
3. General information is partially taken from [Wikipedia English](https://en.wikipedia.org/wiki/Main_Page) and [Wikipedia Chinese](https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5).
### Media
1. Hero images and background image are taken from [Unsplash](https://unsplash.com/)
2. Hero images, cuisine images and info window images are taken from [Wikipedia English](https://en.wikipedia.org/wiki/Main_Page) and [Wikipedia Chinese](https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5)
3. Info window images and other images are taken from [Google Images](https://images.google.de/) filters with creative common license ![create common license](assets/images/readme/google_image.png)
4. The video on Culture section is taken from [Youtube](https://youtu.be/AQODWgAuC5c).
### Other
1. I also want to thank Code Institute online tutors and my mentor Spencer for the technical help and ideas.