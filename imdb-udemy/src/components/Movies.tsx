import Card from "./Card"

interface MovieProps {
    data: Array<Object>
}

export default function Movies({
    data
} : MovieProps) {
    return (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
            {
                data.map((movie: Object) => (
                    <Card key={movie?.id} movie={movie} />
                ))
            }
        </div>
    )
}
