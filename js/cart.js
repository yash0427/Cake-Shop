var addItemId = 0;
function cart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var name1 = document.createElement('div');
    name1.innerText = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;
    var select = document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    label.append(select);
    var delBtn = document.createElement('button');
    delBtn.innerText = 'Remove';
    delBtn.setAttribute('onclick', 'del('+addItemId+')');
    var cartItems = document.getElementById('name1');
    selectedItem.append(img);
    selectedItem.append(name1);
    selectedItem.append(label);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
}

function del(item) {
    document.getElementById(item).remove();
}