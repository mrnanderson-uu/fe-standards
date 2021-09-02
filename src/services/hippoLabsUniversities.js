
const hippoBaseurl = 'http://universities.hipolabs.com/search';

const get = (url) => fetch(url,{
    method:'GET',
    headers:{
        'Content-Type': 'application/json',
    }
})
.then(response=>response.json());

const getUniversitiesByCountry = ({country}) => get(`${hippoBaseurl}?country=${country}`)
.then(data=>{
    
    const deDupedData = data.reduce((acc,university)=>{
        if(acc.find(u=>
            university.name===u.name&&
            university.country===u.country&&
            university.domains.length===u.domains.length)){    
        return acc;
            }
            acc.push(university);
            return acc;
    },[])
    return deDupedData;
})


const getUniversitiesByCountryAndName = ({country, name}) => get(`${hippoBaseurl}?name=${name}&country=${country}`)

export {
    getUniversitiesByCountry,
    getUniversitiesByCountryAndName
}