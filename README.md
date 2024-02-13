For this assignment, I created a TRON-style Tic Tac Toe game with visuals inspired by the movie TRON Legacy. The game requires two players, with one playing as blue and the other as orange. When the mouse or cursor hovers over the X/O model, its size increases to indicate selection. Clicking on the model moves it to a position on the board. There are three white buttons: pressing the side buttons spawns a new X or O model, while pressing the middle button clears the board. I modelled and textured everything in Blender.

The challenges I have, the first one is I’m having trouble move the 3D model to a selected position, I was originally going to let the player able to move the models freely, but it will only move along x and y coordinate, I’m not sure if this has anything to do with FOV, so I added nine cubes represent the nine blocks on the board, and player first need to select the X or O icon, and then need to select a cube, program will memorize the position fo the cube, I have them printed in the console log, but I couldn’t get the X/O icons to move to the position, and lastly I  tried to create a poll of position coordinate, when clicked on an icon, it will randomly assign a coordinate to that icon, and it will move to that position with animation_mouseclick. The next challenge is I couldn’t get some of the more complex procedure material properly exported with the gltf model. I also couldn’t get the reflection of the lighting work properly in the AFrame. 

I got some help from an "Intro to WebXR and A-Frame" course on YouTube by UW Reality Lab. Additionally, I sought help from ChatGPT, although it didn't fully resolve the webXR interactivity as I desired. Nonetheless, I was able to achieve some functional results, including basic interactivity, object selection, movement to different positions, spawning new objects, and clearing objects.



Intro to WebXR and A-Frame course:
https://www.youtube.com/watch?v=HrLsr-nzZGA, https://www.youtube.com/watch?v=PiTPTAAiAvQ&t=95s, https://www.youtube.com/watch?v=1vI50sCAyeI

