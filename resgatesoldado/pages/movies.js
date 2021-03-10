import useSWR from 'swr'
export default function Movies(){
    
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=fd6b0637&s=resgate`,getServerSideProps)
    if (error) return <div>Falha na requisição...</div>

    if (!data) return <div>Carregando...</div>
    return (
        <div>
             { data.Search.map( (m) => <div>{m.Title} --- <br /><img src={m.Poster} alt="POSTER FALTANDO"></img> --- {m.Year}</div>  ) }
        </div>
    )
}

async function getServerSideProps(url) {

    const res = await fetch(url)

    const json = await res.json()

    return json

}


