import React from 'react';
import {
    useQuery,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
import {getUniversitiesByCountry} from '../services/hippoLabsUniversities';

// Create a client
const queryClient = new QueryClient()

// Create client provider to wrap components that use react-query
const ReactQueryExQueryClientProvider = ({children}) =>(
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
)

// This component uses react-query provider directly. The proposed implementation is we add results from react-query to a context provider too.
// This would create a 3 layer solution.
// 1 Server State
// 2 FrontEnd "Server State"
// 3 FrontEnd "Client State"
const Universities = ()=>{
 const universityQuery = useQuery('universities',async ()=> await getUniversitiesByCountry({country:'united states'}))
    return (
        <>
       { universityQuery?.data?.map(university=>(<div key={`${university.alpha_two_code}${university.name}${university.country}${university.domains.length}`} >
        {JSON.stringify(university)}
    </div>))}
    </>
    )
    }

const ReactQueryEx = () =>{
    return(
    <ReactQueryExQueryClientProvider>
    <div>React Query Example</div>
   <Universities/>
    </ReactQueryExQueryClientProvider>
    )
}

export default ReactQueryEx;