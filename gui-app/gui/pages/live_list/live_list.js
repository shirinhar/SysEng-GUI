var ul = $('ul.rig');
var count = 15; // number of images

for(var i = 1; i <= count; i++) {
    ul.append('<li><img src="bg/bg' + i + '.jpg"></li>');
}
