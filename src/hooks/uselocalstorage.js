import { useEffect, useState } from "react"

const getlocalstoragevalue = (key,initvalue)=>
{
    const savedvalue =  JSON.parse(localStorage.getItem(key));
    if(savedvalue)
    {
        return savedvalue;
    }
    if(initvalue instanceof Function)
        return initvalue();
    return initvalue;
}
const useLocalstorage = (key,initvalue)=>
{
    const [value,setvalue] = useState(()=>getlocalstoragevalue(key,initvalue));
    useEffect(()=>
    {
        localStorage.setItem(key,JSON.stringify(value));
    },[value,key])
    return [value,setvalue];
}
export default useLocalstorage;