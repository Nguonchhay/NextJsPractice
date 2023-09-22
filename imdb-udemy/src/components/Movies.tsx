interface MovieProps {
    data: Array<object>
}

export default function Movies({
    data
} : MovieProps) {
    console.log(data);
    return (
        <div>
            {
                data.map((movie: object) => (
                    <div key={movie?.id}>{movie?.title}</div>
                ))
            }
        </div>
    )
}
