import { useState } from 'react'
import useSWR from 'swr'
export default function Movies(){
    const [filmes, setFilmes]= useState('resgate')
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=fd6b0637&s=${filmes}`,Fetcher)
    

    const handleChange = e => {
        setFilmes(e.target.value)
    }


    return (
        <div>
            <input type="search" onChange={handleChange}/>
            
            {data && data.Search ? <div>{data.Search.map( (m) => <div>{m.Title} --- <br /><img src={m.Poster} alt="POSTER FALTANDO"></img> --- {m.Year}</div>  ) }</div> : null}
                                
            
        </div>
    )
}

async function Fetcher(url) {

    const res = await fetch(url)

    const json = await res.json()

    return json

}


