const heading = React.createElement(
    'div',
    {
        class : 'heading'
    }, 
    React.createElement(
        'h1', {}, 'innerdiv'
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);