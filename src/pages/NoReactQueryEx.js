import React, { useEffect, useContext} from 'react';
import { getUniversitiesByCountry } from '../services/hippoLabsUniversities';
import { NoReactContext } from '../contextproviders/NoReactQueryExContextProvider';

// This component just uses context provider.
// 1 Server State
// 2 FrontEnd "Client State" useMemo could be used to cache results. 
// How often do/can we mount components and fetch cached data? By default react-query fetches on every mount anyway.
const Universities = () =>{
    // context provider
    const {noReactState, setNoReactState} = useContext(NoReactContext)
    useEffect(()=>{
        // call api and put results into client state. We can fetch and cache/invalidate-cache on a case by case basis.
        (async () => {
        setNoReactState({universities: await getUniversitiesByCountry({country:'united states'})});
        })();
    },[setNoReactState])

    return(
        <>
            { noReactState.universities.map(university=>(<div key={`${university.alpha_two_code}${university.name}${university.country}${university.domains.length}`} >
            {JSON.stringify(university)}
            </div>))}
        </>
    )
}

const NoReactQueryEx = () => {
    return (
        <>
        <div>NO React Query Example</div>
        <Universities/>
        </>
    )
}

export default NoReactQueryEx;