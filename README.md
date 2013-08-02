Hello, world!
This is my first git repository.
It's a javascript simulation of the classic Dungeon Master game, primarily the Atari ST version.
The code for creating the dungeon in javascript was originated by Joe at Joe's blog. http://joesblog.me.uk/
Screenshots from the Windows port by Paul Stevens were used as primary reference. http://dmweb.free.fr/?q=node/851#toc8
Some of the Atari ST dungeon.dat extracts were used as secondary reference. http://greatstone.free.fr/dm/index.html
Map reference from http://amigames.magicdomain.dk/text/d/dungeon_master.html

First repository post - Changes that I've made to Joe's posted source code include:
-Changed graphics assets so that a brighter shade of grey is displayed. Captured from Paul Stevens' Windows port.
-Typed in five levels of the maze using Joe's data format.
-Added staircase display functions and graphics for stair-up, stair-down, and stairs 2 blocks away (3 blocks away, 0 blocks away, and diagonal views not included yet).
-Added graphics for wooden doors, rounded window doors, and cross-reinforced doors and changed the door constructor.
-Consolidated javascript code so that the same code doesn't have to be repeated in each of four directions.
-Added decor classes for stairs, and mirrors and the champion portraits inside the mirrors.
-Removed decor classes for right0 and left0 wall decor (doesn't seem to be in the original game).
-Added mirror display routines for right1-inward, left1-inward, left2-facing, and right2-facing relationships.
-Added a jQuery click function to respond to mirror-portrait clicks.
-Added door cranking sound.
-Added Xerxes font for dungeon wall inscriptions (not a perfect match)
-Added 5x5_rounded font for interface text (seems a perfect match except line height needs to be suppressed with css line-height).
-Added Primitive font for scrolls and scripts (haven't used it anywhere and it doesn't seem to match well)
