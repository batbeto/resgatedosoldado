import { useState } from 'react'
import useSWR from 'swr'
export default function Movies(){
    const [filmes, setFilmes]= useState('resgate')
    const [page, setPage] = useState(1)
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=fd6b0637&s=${filmes}&page=${page}`,Fetcher)
    

    const handleChange = e => {
        setFilmes(e.target.value)
    }

    console.log(data)
    console.log(page)
    return (
        <div>
            <div>
                <input type="search" onChange={handleChange}/>
                <div>
                    <button onClick={() => setPage(page+1)}>Proxima Pagina</button>
                </div>
                <div>
                    {page > 1 && (
                        <button onClick={() => setPage(page-1)}>Proxima Anterior</button> )
                    }
                </div>
                {data && data.Search ? <div>{data.Search.map((m) => <div>{m.Title} --- <br /><img src={m.Poster} alt="POSTER FALTANDO"></img> --- {m.Year} </div> )}</div>  : <p>NÃO FORAM ENCONTRADOS FILMES</p>}
                      
            </div>
            
        </div>
    )
}

async function Fetcher(url) {

    const res = await fetch(url)

    const json = await res.json()
    
    return json

}
