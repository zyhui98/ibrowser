chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.color) {
        if (request.color === 'reset') {
            document.body.style.backgroundColor = '';
        } else {
            document.body.style.backgroundColor = request.color;
        }
    }
    if (request.copy) {
        // 移除所有禁止复制的事件监听器
        document.body.oncopy = null;
        document.body.onselectstart = null;
        document.body.oncontextmenu = null;
        
        // 移除禁止复制的CSS样式
        const style = document.createElement('style');
        style.textContent = `
            * {
                -webkit-user-select: auto !important;
                -moz-user-select: auto !important;
                -ms-user-select: auto !important;
                user-select: auto !important;
            }
        `;
        document.head.appendChild(style);
        
        // 移除所有元素的oncontextmenu, oncopy, onselectstart属性
        const elements = document.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
            elements[i].oncontextmenu = null;
            elements[i].oncopy = null;
            elements[i].onselectstart = null;
        }
        
        console.log('Copy protection has been disabled.');
    }
});

