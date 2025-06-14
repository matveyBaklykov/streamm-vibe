import MovieBannerCard from "@/components/MovieBannerCard"

const MovieBanner = () => {
    const titleId = 'movie-banner-title'

    return (
        <section className="container" aria-labelledby={titleId}>
            <MovieBannerCard title="Kantara" description="A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands." imgSrc="/src/assets/images/movie-banner/2.jpg" TitleTag="h1" titleId={titleId} isSmallPaddingY/>
        </section>
    )
}

export default MovieBanner