import { useState } from 'react'
import useSWR from 'swr'
export default function Movies(){
    const [filmes, setFilmes]= useState('resgate')
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=fd6b0637&s=${filmes}`,Fetcher)
    

    const handleChange = e => {
        setFilmes(e.target.value)
    }

    console.log(data)
    return (
        <div>
            <section>
                <input type="search" onChange={handleChange}/>
                
                {data && data.Search ? <div>{data.Search.map( (m) => <div>{m.Title} --- <br /><img src={m.Poster} alt="POSTER FALTANDO"></img> --- {m.Year}</div>  ) }</div> : <p>NÃO FORAM ENCONTRADOS FILMES</p>}
                <nav>
                    <ul id="paginator"></ul>
                </nav>                
            </section>
        </div>
    )
}

async function Fetcher(url) {

    const res = await fetch(url)

    const json = await res.json()

    return json

}
