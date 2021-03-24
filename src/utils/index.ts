export const fetchJson = async (url: string) => {
    try {
        const json = await fetch(url, { method: 'GET' }).then(res => res.json());

        return json;
        
    } catch (error) {
        console.log(error);
     }
}