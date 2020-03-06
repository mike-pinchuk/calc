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







