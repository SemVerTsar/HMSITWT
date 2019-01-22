const count = document.getElementById('count').value;
const row = document.getElementById('row');


for(i = 0; i < count; i++) {
    row.insertAdjacentHTML('afterbegin', '<div class="shirt"></div>');
};
