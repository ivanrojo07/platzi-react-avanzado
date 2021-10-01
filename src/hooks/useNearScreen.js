import { useState, useEffect, useRef } from 'react';

function useNearScreen(){
    const ref = useRef(null)
    const [show, setShow] = useState(false)
    useEffect(function(){
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined'
            ? window.IntersectionObserver
            : import('intersection-observer')
        ).then(()=>{
            // console.log(ref.current)
            const observer = new window.IntersectionObserver(function(entries){
                const { isIntersecting } = entries[0]
                console.log(isIntersecting)
                if(isIntersecting){
                    console.log('si')
                    setShow(true)
                    observer.disconnect()
                }
            })
            observer.observe(ref.current)
        });
        
    },[ref])
    return [show, ref]
}

export default useNearScreen
