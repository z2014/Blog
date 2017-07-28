var data = [
    [{key: 0,content: '你到底是谁？'},{key: 1,content: '啥都不想说，就爱你'}],
    [{key: 0,content: '我想你了，炒鸡炒鸡想'},{key: 1,content: '哼，我不想你，你奏开'}]
    ],
    myword = [
        [{txt:'我是你的宝宝啊'}, {txt: '我就知道你要说这个'}],
        [{txt: '我不想你', children: {txt: '那怎么可能呢?'}}, {txt: '卧槽，你一定是外面有狗了'}]
    ],
    dialog = document.getElementById('dialog'),
    spanel = document.getElementById('spanel'),
    answer= {},
    index = 0;