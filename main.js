var data = [{
        name: 'Kyiv',
        population: 29005474
    },
    {
        name: 'Lviv',
        population: 756236
    },
    {
        name: 'New York',
        population: 96523654
    },
    {
        name: 'London',
        population: 85632147
    },
    {
        name: 'Slavsko',
        population: 5963
    },
    {
        name: 'Beregovo',
        population: 69333
    }
];

let $list, $btn, $search, $dropdown;

function createItem(cityObject, $list) {
    //формування тексту
    let tmp = createText(cityObject);
    //якщо текст пустий нічого не малювати
    if (tmp === null) return;
    // стврюємо елемент і прикріклюємо його до списку
    let element = document.createElement('li');
    element.className = 'list-item';
    element.innerHTML = tmp;
    $list.appendChild(element);

}

function createText(cityObject) {
    // перевіряємо чи населення більше ніж потрібно інакше виходимо з програми
    if (cityObject.population / 1000000 < 1) return null;

    let population = (cityObject.population / 1000000).toFixed(1);
    return `${cityObject.name}, населення ${population} млн.`
}


function init(listId) {
    // ініціалізація елементів DOM'у
    $list = document.getElementById(listId);
    $btn = document.getElementById('dropbtn');
    $search = document.getElementById('myInput');
    $dropdown = document.getElementById('myDropdown');

    //добавлення подій до кнопки і пошуку
    $btn.addEventListener('click', (event) => {
        $dropdown.classList.toggle("show");
    });

    $search.addEventListener('keyup', (event) => {
        var  filter, li, i;
        filter = $search.value.toUpperCase();
        li = div.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    });

    // відмальовування елементів списку
    data.forEach((element) => {
        //створення елментів
        createItem(element, $list);
    });
    //додавання події щоб при кліку на елемент списку він підсвічувався і "йшов на гору"
    toogleItem();
}

function toogleItem() {
    document.addEventListener('click', event => {
        let element = event.target;
        // перевіряємо чи клікнули по елементу списку а десь інше
        if (element.className.indexOf('list-item') !== -1) {
            // перевіряємо чи зараз є активний елемент в списку
            let activeItem = document.querySelector('.active');
            if (activeItem) {
                // забираємо його активність
                activeItem.className = 'list-item';
            }
            element.className += ' active';
            // закриваємо меню і ставимо надпис на верх
            let btn = document.querySelector('.dropbtn');
            btn.value = element.innerHTML;
            $dropdown.classList.remove("show")
        }
    });
}



// старт програми
init('list')