import Head from 'next/head'

const fonts = [
    "OpenSans-Bold.ttf", "OpenSans-BoldItalic.ttf", "OpenSans-ExtraBold.ttf", "OpenSans-ExtraBoldItalic.ttf", "OpenSans-Italic.ttf", "OpenSans-Light.ttf", "OpenSans-LightItalic.ttf", "OpenSans-Regular.ttf", "OpenSans-SemiBold.ttf", "OpenSans-SemiBoldItalic.ttf", "Roboto-Black.ttf", "Roboto-BlackItalic.ttf", "Roboto-Bold.ttf", "Roboto-BoldItalic.ttf", "Roboto-Italic.ttf", "Roboto-Light.ttf", "Roboto-LightItalic.ttf", "Roboto-Medium.ttf", "Roboto-MediumItalic.ttf", "Roboto-Regular.ttf", "Roboto-Thin.ttf", "Roboto-ThinItalic.ttf"
]

const Meta = ({ title, keywords, description, image }) => {
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="apple-mobile-web-app-status-bar" content="#100058" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#100058" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta property="og:site_name" content={title} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={image} />
                <meta name='keywords' content={keywords} />
                <meta name='description' content={description} />
                <meta charSet='utf-8' />
                <link rel='icon' href='/favicon.ico' />
                <title>{title}</title>

                {fonts.map(e => {
                    <link
                        key={e}
                        id={e}
                        rel="preload"
                        href={`/fonts/${e}`}
                        as="font"
                        crossOrigin=""
                    />
                })}
            </Head>
        </>
    )
}

Meta.defaultProps = {
    title: 'Himapala Unesa',
    image: '/images/meta-logo.png',
    keywords: 'mapala, unesa, himapala, river guide, rafting, ekspedisi',
    description: 'Himpunan Mahasiswa Pencinta Alam Universitas Negeri Surabaya.',
}

export default Meta