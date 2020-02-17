$(document).ready(() => {
let a = document.querySelector('.screen');
    
 function insert (num) {
        a.value =
        a.value + num;
}

 function clean () {
       	a.value = '';
    }

 function equal () {
        let condition = a.value;
        if (condition) {
            a.value = eval(condition);
        } 
    }

	$('#ac').click(() => {
		clean();
			});

	$('#brecket_1').click(() => {
		insert('(');
	});

	$('#brecket_2').click(() => {
		insert(')');
	});

	$('#divide').click(()=> {
		insert('/');
	});

	$('#seven').click(() => {
		insert('7');
	});

	$('#eight').click(() => {
		insert('8');
	});

	$('#nine').click(() => {
		insert('9');
	});

	$('#multiply').click(() => {
		insert('*');
	});

	$('#four').click(() => {
		insert('4');
	});

	$('#five').click(() => {
		insert('5');
	});

	$('#six').click(() => {
		insert('6');
	});

	$('#minus').click(() => {
		insert('-');
	});

	$('#one').click(() => {
		insert('1');
	});

	$('#two').click(() => {
		insert('2');
	});

	$('#three').click(() => {
		insert('3');
	});

	$('#plus').click(() => {
		insert('+');
	});

	$('#zero').click(() => {
		insert('0');
	});

	$('#dote').click(() => {
		insert('.');
	});

	$('#equal').click(() => {
		equal();
	});

});












