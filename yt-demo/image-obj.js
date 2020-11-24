var listImageObject = new Array();

var btnSaveImage = document.forms['image-form']['btn-save'];
btnSaveImage.onclick = function () {
    var txtThumbnail = document.forms['image-form']['image-url'];
    var txtImageTitle = document.forms['image-form']['image-title'];
    var txtImageContent = document.forms['image-form']['image-content'];
    var txtImageCategory = document.forms['image-form']['image-category'];
    var Thumbnail = txtThumbnail.value;
    var Title = txtImageTitle.value;
    var Content = txtImageContent.value;
    var Category = txtImageCategory.value;
    var imgObj = {
        'title': Title,
        'thumbnail': Thumbnail,
        'content': Content,
        'category': Category
    }
    listImageObject.push(imgObj);
}
var btnReset = document.forms['image-form']['btn-reset'];
btnReset.onclick = function () {
    var txtThumbnail = document.forms['image-form']['image-url'];
    var txtImageTitle = document.forms['image-form']['image-title'];
    var txtImageContent = document.forms['image-form']['image-content'];
    var txtImageCategory = document.forms['image-form']['image-category'];
    txtImageTitle.value = null;
    txtImageContent.value = null;
    txtThumbnail.value = null;
    txtImageCategory.value = null;
}

var btnDisplayImage = document.forms['image-form']['btn-display'];
btnDisplayImage.onclick = function () {
    var contentDiv = document.querySelector('#content');
    for (var i = 0; i < listImageObject.length; i++) {
        var element = listImageObject[i];
        console.log(`<label>${element.title}</label><img src="${element.thumbnail}"/><label>${element.content}</label><label>${element.category}</label>`);
        contentDiv.innerHTML += `<div class="item"><div class="title"><h1>${element.title}</h1></div><img src="${element.thumbnail}"/><div class="content">${element.content}</div><div class="category"><lable>Category:</lable><i>${element.category}</i></div></div>`;
    }
}