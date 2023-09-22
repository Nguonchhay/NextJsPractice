interface MovieProps {
    data: Array<object>
}

export default function Movies({
    data
} : MovieProps) {
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
