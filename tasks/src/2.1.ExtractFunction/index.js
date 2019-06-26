import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

/**
     Выдели метод отрисовки лота (renderLot), метод отрисовки поста (renderPost) и используй их.
 */

function renderLot(lot)
{
    return (
        <div className="lot">
            <div className="lotName">{lot.name}</div>
            <div className="lotDescription">{lot.description}</div>
        </div>
    );
}

function renderPost(post)
{
    return (
        <div className="post">
            <div className="postHeader">
                <span className="postAuthor">{post.author}</span>
                <br/>
                <span className="postTime">{post.time}</span>
            </div>
            <div className="postMessage">{post.message}</div>
        </div>
    );
}

const posts = [
    {
        author: 'Парень не промах',
        time: '2 часа назад',
        message: 'Попробую с удовольствием ;)'
    },
    {
        author: 'Милая девушка',
        time: '3 часа назад',
        message: 'Можно использовать для выпекания чизкейков :)'
    }
];

ReactDom.render(
    <div className="page">
        {
            renderLot({
                name: 'Форма для выпекания',
                description: 'Идеальна для приготовления десертов!'
            })
        }
        <div className="posts">
            {renderPost(posts[0])}
            {renderPost(posts[1])}
        </div>
    </div>,
    document.getElementById('app')
);

/**
     Подсказки:
     - Чтобы вставить какое-то значение из JavaScript в верстку используй фигурные скобки:
       <div className={'star' + ' ' + 'person'}>{surname + ' ' + name}</div>
     - Воспринимай тэг верстки как литерал, описывающий значение некоторого типа данных.
         - Это значение можно положить в переменную или вернуть:
           const label = <span>Надпись</span>;
         - Из эстетических соображений возвращаемый тэг часто оборачивается в круглые скобки:
           return (
             <span>Надпись</span>
           );
     - Используй автоформатирование кода. Например, в Visual Studio Code оно вызывается сочетанием Control+Shift+F
 */
