function TodoSearch() {
    return (
        <>
            <input 
                type="text" 
                placeholder="Search TODO"
                onChange=
                {
                    (event) => {
                        console.log(event.target.value);
                    }
                }
            />

               
        </>
    );
}

export { TodoSearch }