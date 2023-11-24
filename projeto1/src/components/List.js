import Item from './Item';

function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ferrari' anoLancamento={1985}/>
                <Item marca='Mercedes' anoLancamento={2003}/>
                <Item marca='Fiat' anoLancamento={2000}/>
                <Item marca='Chevrolet' anoLancamento={1999}/>
                <Item />
            </ul>
        </>
    );
}

export default List;