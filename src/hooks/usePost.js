import { useMemo } from "react";
//Важное описание работы сортировки. Метод sort() не возвращает новый массив а мутирует старый. Так как нам нельз изменять на прямую разворачиваем новый массив - копию оригинального и его мутируем.
export const useSortedPosts = (posts, sort) => {
    const sortedPostst = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts])
    return sortedPostst
}


export const usePosts = (posts, sort, query) => {
    const sortedPostst = useSortedPosts(posts, sort);
    const sorterAndSearchedPosts = useMemo(() => {
        return sortedPostst.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPostst])
    return sorterAndSearchedPosts
}