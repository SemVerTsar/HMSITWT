var count = document.getElementById('count').value;
var row = document.getElementById('row');


for(i = 0; i <= count; i++) {
    row.insertAdjacentHTML('afterbegin', '<div class="item"></div>');
}
