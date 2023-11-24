import PropTypes from 'prop-types';

function Item({marca, anoLancamento}){
    return(
        <>
            <li>{marca} - {anoLancamento}</li>
        </>
    );
}
//   ↓ P minusculo
Item.prototype = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number,
}
Item.defaultProps = {
    marca: 'Faltou a marca',
    anoLancamento: 0,
}
export default Item;