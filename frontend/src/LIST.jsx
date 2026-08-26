function List() {
    const List= ["html","java","css"];
    return(
        <div>
            {List.map((course) => (
                <div key={course}>
                <h2>{course}</h2>
                </div>
            ))}
        </div>
    )

}
export default List;