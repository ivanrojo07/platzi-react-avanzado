import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData(){
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(function(){
        setLoading(true)
        fetch('https://petgram-server-ivan.vercel.app/categories')
            .then(res=>res.json())
            .then(response=>{
                setLoading(false)
                setCategories(response)
            })
            .catch(
                
                error=>setLoading(false)
            );
    },[])

    return { categories, loading }
}

const CategoryListComponent = () => {
    
    const [showFixed, setShowFixed] = useState(false)
    const { categories, loading } = useCategoriesData()

    useEffect(function (){
        const onScroll = (e)=>{
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll',onScroll)
        return ()=>document.removeEventListener('scroll',onScroll)
    },[showFixed])

    const renderList = (fixed)=>{
        return (
        <List fixed={fixed}>
            {
                categories.map(category => {
                    return (<Item key={category.id}>
                        <Category {...category} path={`/pet/${category.id }`} />
                    </Item>)
                })
            }
        </List>
    )}
    if(loading){
        return ("Loading...")
    }
    return (
        <Fragment>
            { renderList()}
            {showFixed === true && renderList(true)}

        </Fragment>
    )
}

export const CategoryList = React.memo(CategoryListComponent)