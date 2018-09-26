import _ from 'lodash';
import './style.css';
import icon from './share-icon.png';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // 设置class样式
    element.classList.add('hello');
    // 导入图片
    var image = new Image();
    image.src = icon;
    element.appendChild(image);
    return element;
}

document.body.appendChild(component());