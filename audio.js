 var aNote = document.getElementById('aAudio');
 var bNote = document.getElementById('bAudio');
 var cNote = document.getElementById('cAudio');
 var dNote = document.getElementById('dAudio');
 var eNote = document.getElementById('eAudio');
 var fNote = document.getElementById('fAudio');
 var gNote = document.getElementById('gAudio');

$(document).ready(function(){
	$('#a').click(function(){
			aNote.play()
	});

	$('#b').click(function(){
		bNote.play()
	});

	$('#c').click(function(){
		cNote.play()
	});

	$('#d').click(function(){
		dNote.play()
	});

	$('#e').click(function(){
		eNote.play()
	});

	$('#f').click(function(){
		fNote.play()
	});

	$('#g').click(function(){
		gNote.play()
	});
});

$(document).keypress(function(e){
	if (e.which == 97){
		aNote.play();
	} else if(e.which == 98){
		bNote.play();
	} else if(e.which == 99){
		cNote.play();
	} else if(e.which == 100){
		dNote.play();
	} else if(e.which == 101){
		eNote.play();
	} else if(e.which == 102){
		fNote.play();
	} else if(e.which == 103){
		gNote.play();
	} else{
		alert("You pressed the wrong key note");
	}
});



		