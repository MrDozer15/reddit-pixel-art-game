

/*
//clicked the full screen button
$('.game .full-screen').addEventListener('click', e=> {
	$('.game .view').requestFullscreen();
});*/

//clicked the load level
$('.game .start-game').addEventListener('click', e=> {
	startGame();
});

//clicked the load level
$('.game .load-level').addEventListener('click', e=> {
	
});

//clicked the load level
$('.game .load-example-level').addEventListener('click', e=> {

	clearOpenSaveGame();

	const testLevelName = 'test-level-3-reddit-game-level.json';

	fetch('/levels/'+testLevelName)
		.then(response => response.json())
		.then(exampleMapData => {
			loadMap(testLevelName, exampleMapData);
		})
		.catch(e => console.error('error loading map',e));
});


//clicked the load level
$('.game .clear-save-data').addEventListener('click', e=> {
	if (confirm('Are you sure you want to delete all save data from the game?')) {
		clearSaveData();
		alert('Save data has been erased.')
	}
});