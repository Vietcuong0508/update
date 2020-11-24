var btnAddImage = document.forms['image-form']['btn-add'];
btnAddImage.onclick = function () {
    var txtImageUrl = document.forms['image-form']['image-url'];
    var imageUrlValue = txtImageUrl.value;
    if (imageUrlValue.length == 0) {
        alert('Please enter image url!');
    } else {
        var contentDiv = document.getElementById('content');
        contentDiv.innerHTML += `<img src="${imageUrlValue}">`;
        txtImageUrl.value = '';
    }
}