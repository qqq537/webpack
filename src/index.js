import _ from 'lodash';
// import './style.css';
// import icon from './share-icon.png';
import {
    printMe
} from './print'

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // 设置class样式
    // element.classList.add('hello');
    // 导入图片
    // var image = new Image();
    // image.src = icon;
    // element.appendChild(image);

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}
let element = component();

document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}