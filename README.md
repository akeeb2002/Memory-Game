# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Khandaker Hossain

Time spent: 6 hours spent in total

Link to project: https://glitch.com/edit/#!/codepath-prework-2022?path=README.md%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)
![game won](https://user-images.githubusercontent.com/90944924/161123836-987d291d-b9d2-4f56-91ff-180390b44029.gif)
![stop](https://user-images.githubusercontent.com/90944924/161125627-1cd6c8f8-62df-4189-8213-fa785bbca83a.gif)
![new nothing](https://user-images.githubusercontent.com/90944924/161129216-6e13909f-3fc0-4bc9-be1f-6803b562a54c.gif)
![3 mistakes PM](https://user-images.githubusercontent.com/90944924/161184583-24de76af-f77c-4a77-9c61-9de8932984bd.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.  
Youtube: watched tutorial on how to use setInterval and clearInterval methods to create the timer. 
w3schools.com: Gave brief explanations about incorporating images into the buttons, setInterval, clearInterval, and showed the different selection of colors used for the additional buttons. Mozilla: math.random function. StackOverflow: looked at old code as a preference for random function. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)       
For the most part, it was smooth sailing doing everything until the 5th and 6th Optional Features but I struggled more heavily with the 6th feature which was adding the timer/clock to the game. Everything from before was easy since there were clear directions on how to do them but for this one feature it was just being left with the hint to use setinterval and clearinterval which I didn't know anything about. The design and positioning part of placing the clock was made easy thanks to CSS not being very difficult to understand however since I didn't know anything about the set and clear intervals, I decided on the w3schools link that was provided and from there tried to figure out what each method did and how to use them. Although w3schools did help me understand the functionality of the methods, I still didn't have a clear idea on how I would go about creating having the timer count down from 7 to 0 and then stop. So that led me to Youtube where I watched videos on JavaScript timers. After watching the videos I felt like I had a good sense of what to do so I went back to Glitch and started to write an entirely new function that would use setInterval and the timer would go from 7 to 0. This was obviously a bad idea since It wasn't connected to the actual start of the game so then i went on and figured out that the setInterval would have to be in the startGame function since the timer starts depending on the start of the game. I placed the setInterval and clearInterval method in the startGame function but then faced the issue of the game not going back to the 7th second which I fixed by setting the timeleft variable to 7. This would make it so that after each game, the timer would go back to being at 7 then after that things weren't difficult anymore since most of the unfamiliar stuff was dealt with. In the end, this shows just how clueless a person can be when faced with unfamilar and new tasks and have to go through a process of trial and error to finally succeed.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)                           
After completing this submission, I became curious as to how CSS and HTML makes what seemed like very difficult tasks so much easier to do. For example, they made creating or incorporating things such as buttons, pages and colors very simple compared to other languages that I am familiar with such as Java and C++. For this reason I am curious as to just how much one can do with frontend languages alone or how far one one can go with HTML, CSS and Javascript. How do the frontend and backend languages even work together so well? I would also like to know how HTML and CSS would work with languages such as Java or Python. I would also like to know more about JavaScript and how it differs from languages such as Python and Java. It is said that Python makes everything easy so what would be the benefit of using JavaScript? When doing much more complex applications and programs, how easy or difficult would JS make that process be compared to other languages? In other words, I would like to get hands on and learn more about JavaScript so i can figure out its advantages and disadvantages.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific.                                                                                                  
If I had a few more hours to work on this project, the first functionality I would try to work towards would be by making the game buttons sound more complex. Instead of the buttons being a single tone, I would have them be the voices of different characters or be a sequence of multiple tones that matches with the images shown after pressing each button. Furthermore, a feature I would implement is allowing the user to press a hint button which would repeat back the previous pattern. The user would be allowed 3 hints in total, but to not make the game too easy, every time they received a hint the player would be allowed to make one less mistake and vice versa. Additionally, I would make it so that the game has two separate screens with each having different backgrounds to distinguish them from each other. The first screen would be the introduction screen where the player is greeted and told the rules of the game. On the bottom of this screen you would have a “Start” button which would lead the player to the next screen. The second screen is where the game would be played. Right when the user enters this screen a timer would start and once it reached 0 the game would begin. Lastly, I would try to fix a few of the bugs I noticed while playing the game. For example, sometimes after pressing a button it would continue playing the tone rather than going back to its original state even though the button wasn’t being pressed anymore. I can’t say I will be successful since I don’t have much experience with debugging, but I would try to look it up online and learn how to do it.

## License

    Copyright Khandaker Hossain

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
