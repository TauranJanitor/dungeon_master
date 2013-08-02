function checkEvent(data)
{
	if (curmap[curX][curY].onWalkover != null)
	{
		if (curmap[curX][curY].onWalkover.onEvent_runonce && !curmap[curX][curY].onWalkover.onEvent_hasrun)
		{
			curmap[curX][curY].onWalkover.myEvent(data);
			curmap[curX][curY].onWalkover.onEvent_hasrun = true;
			if (curmap[curX][curY].onWalkover.myCallback != null) {
				curmap[curX][curY].onWalkover.myCallback();
			}
		}
		else if (!curmap[curX][curY].onWalkover.onEvent_runonce)
		{
			curmap[curX][curY].onWalkover.myEvent(data);
			if (curmap[curX][curY].onWalkover.myCallback != null) {
				curmap[curX][curY].onWalkover.myCallback();
			}
		}
		
	}
}
