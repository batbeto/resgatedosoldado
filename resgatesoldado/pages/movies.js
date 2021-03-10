export default function Movies(){
    const data = fetcher(`http://www.omdbapi.com/?apikey=fd6b0637&s=bagdad`)
    return (
        <h1>Resgate do Soldado</h1>
    )
}

async function fetcher(url) {

    const res = await fetch(url)

    const json = await res.json()

    return json

}


