function Person({name, age, profession, img}){
    return(
        <div>
            <img src={img} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
        </div>
    )
}

export default Person;