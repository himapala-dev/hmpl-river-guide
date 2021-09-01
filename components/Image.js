export default function Image({ src, alt, width, height, className, sprite }) {
    return (
        <>
            {sprite ? (
                <img src={`${process.env.BACKEND_URL + src.src}?${sprite}`} alt={alt} width={width} height={height} className={className} />
            ) : (
                <img src={`${process.env.BACKEND_URL + src.src}?lqip`} alt={alt} width={width} height={height} className={className} />
            )}
        </>
    )
}
