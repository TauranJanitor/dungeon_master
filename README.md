<h4>Hello, world!</h4>
<div>This is my first git repository.</div>
<div>It's a javascript simulation of the classic Dungeon Master game.</div>
<div>The code for creating the dungeon in javascript was originated by Joe at Joe's blog. <a href="http://joesblog.me.uk/">http://joesblog.me.uk/</a></div>
<div>Screenshots from the Windows port by Paul Stevens were used as the primary reference. <a href="http://dmweb.free.fr/?q=node/851#toc8">http://dmweb.free.fr/?q=node/851#toc8</a></div>
<div>Some of the Atari ST dungeon.dat extracts were used as secondary reference. <a href="http://greatstone.free.fr/dm/index.html">http://greatstone.free.fr/dm/index.html</a></div>
<div>Map reference was from amigames. <a href="http://amigames.magicdomain.dk/text/d/dungeon_master.html">http://amigames.magicdomain.dk/text/d/dungeon_master.html</a></div>

<ul><b>2013.08.04 - Character Sheet</b>
<li>Added character sheet that pops when portrait clicked.</li>
<li>Started character object and item object - incomplete definition.</li>
<li>Started function to load character</li>
<li><ul>Able to click on items and move about and drop in a different inventory slot
    <li>Pointer customized to blue hand graphic</li>
    <li>Pointed disappears when object picked up, reappears on object drop</li>
    <li>Can switch object when clicking on occupied inventory slot</li>
    </ul>
</li>
<li>Character sheet loads for now with rebirth options, but clicking on the rectangle closes character sheet</li>
</ul>

<ul><b>2013.08.02 - First repository post - Changes that I've made to Joe's posted source code include:</b>
<li>Changed graphics assets so that a brighter shade of grey is displayed. Captured from Paul Stevens' Windows port.</li>
<li>Typed in five levels of the maze using Joe's data format.</li>
<li>Added staircase display functions and graphics for stair-up, stair-down, and stairs 2 blocks away (3 blocks away, 0 blocks away, and diagonal views not included yet).</li>
<li>Added graphics for wooden doors, rounded window doors, and cross-reinforced doors and changed the door constructor.</li>
<li>Consolidated javascript code so that the same code doesn't have to be repeated in each of four directions.</li>
<li>Added decor classes for stairs, and mirrors and the champion portraits inside the mirrors.</li>
<li>Removed decor classes for right0 and left0 wall decor (doesn't seem to be in the original game).</li>
<li>Added mirror display routines for right1-inward, left1-inward, left2-facing, and right2-facing relationships.</li>
<li>Added a jQuery click function to respond to mirror-portrait clicks.</li>
<li>Added door cranking sound.</li>
<li>Added Xerxes font for dungeon wall inscriptions (not a perfect match).</li>
<li>Added 5x5_rounded font for interface text (matches except line-height needs to be suppressed with css).</li>
<li>Added Primitive font for scrolls and scripts (haven't used it anywhere and it doesn't seem to match well).</li>
<li>Added Front door view and choice between Enter and Resume with Resume starting at various levels.</li>
</ul>
