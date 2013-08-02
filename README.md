Hello, world!
This is my first git repository.
It's a javascript simulation of the classic Dungeon Master game, primarily the Atari ST version.
The code for creating the dungeon in javascript was originated by Joe at Joe's blog. http://joesblog.me.uk/
Screenshots from the Windows port by Paul Stevens were used as reference. http://dmweb.free.fr/?q=node/851#toc8
Some of the Atari ST dungeon.dat extracts were used as reference. http://greatstone.free.fr/dm/index.html

First repository post - Changes that I've made to his posted source code include:
-Changes graphics assets so that a brighter shade of grey is displayed. Captured from Paul Stevens' Windows port.
-Typed in five levels of the maze using http://amigames.magicdomain.dk/text/d/dungeon_master.html as reference.
-Added staircase display function and graphics for stair-up, stair-down, and stairs 2 blocks away (3 blocks away, 0 blocks away, and diagonal views not included yet).
-Added graphics for wooden doors, rounded window doors, and cross-reinforced doors and changed the door constructor.
-Consolidated javascript code so that the same code doesn't have to be repeated in each of four directions.
-Added decor classes for stairs, and mirrors and the champion portraits inside the mirrors.
-Removed decor classes for right0 and left0 wall decor (I don't think you could see the immediate side wall decor in the original).
-Added mirror display routines for right1-inward, left1-inward, left2-facing, and right2-facing relationships.
-Added a jQuery click function to respond to mirror-portrait clicks.
