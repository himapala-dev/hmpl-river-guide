import { urlObjectKeys } from 'next/dist/shared/lib/utils'
import Head from 'next/head'

const fonts = [
    "OpenSans-Bold.ttf", "OpenSans-BoldItalic.ttf", "OpenSans-ExtraBold.ttf", "OpenSans-ExtraBoldItalic.ttf", "OpenSans-Italic.ttf", "OpenSans-Light.ttf", "OpenSans-LightItalic.ttf", "OpenSans-Regular.ttf", "OpenSans-SemiBold.ttf", "OpenSans-SemiBoldItalic.ttf", "Roboto-Black.ttf", "Roboto-BlackItalic.ttf", "Roboto-Bold.ttf", "Roboto-BoldItalic.ttf", "Roboto-Italic.ttf", "Roboto-Light.ttf", "Roboto-LightItalic.ttf", "Roboto-Medium.ttf", "Roboto-MediumItalic.ttf", "Roboto-Regular.ttf", "Roboto-Thin.ttf", "Roboto-ThinItalic.ttf"
]

const Meta = ({ title, keywords, description, image, urlWeb, altImage, type }) => {
    return (
        <>
            <Head>
                {/* Must */}
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <title>{title}</title>

                {/* Android */}
                <meta name="theme-color" content="#100058" />
                <meta name="mobile-web-app-capable" content="yes" />

                {/* iOS */}
                <meta name="apple-mobile-web-app-title" content="Application Title" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />

                {/* Windows */}
                <meta name="msapplication-navbutton-color" content="#100058" />
                <meta name="msapplication-TileColor" content="#100058" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="msapplication-config" content="/browserconfig.xml" />

                {/* Pinned Sites */}
                <meta name="application-name" content="Himapala River Guide" />
                <meta name="msapplication-tooltip" content="Tooltip Text" />
                <meta name="msapplication-starturl" content="/" />

                {/* Tap Highlight */}
                <meta name="msapplication-tap-highlight" content="no" />

                {/* UC Browser */}
                <meta name="full-screen" content="yes" />
                <meta name="browsermode" content="application" />

                {/* Disable night mode for this page */}
                <meta name="nightmode" content="enable" />

                {/* Layout mode */}
                <meta name="layoutmode" content="standard" />

                {/* imagemode - show image even in text only mode */}
                <meta name="imagemode" content="force" />

                {/* Orientation */}
                <meta name="screen-orientation" content="portrait" />

                {/* Main Link Tags */}
                <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
                <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
                <link href="/favicon-96x96.png" rel="icon" type="image/png" sizes="96x96" />

                {/* iOS */}
                <link href="/apple-icon-precomposed.png" rel="apple-touch-icon" />
                <link href="/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
                <link href="/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
                <link href="/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
                <link href="/apple-icon-76x76.png" sizes="76x76" rel="apple-touch-icon" />
                <link href="/apple-icon-120x120.png" sizes="120x120" rel="apple-touch-icon" />
                <link href="/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
                <link href="/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
                <link href="/apple-icon-152x152.png" sizes="152x152" rel="apple-touch-icon" />
                <link href="/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />

                {/* Startup Image */}
                <link href="/apple-icon-180x180.png" rel="apple-touch-startup-image" />

                {/* Pinned Tab */}
                <link href="/images/logo.png" rel="mask-icon" size="any" color="#100058" />

                {/* Android */}
                <link href="/android-icon-192x192.png" rel="icon" sizes="192x192" />
                <link href="/android-icon-144x144.png" rel="icon" sizes="144x144" />

                {/* Others */}
                <link href="/favicon.icon" rel="shortcut icon" type="image/x-icon" />

                {/* UC Browser */}
                <link href="/apple-icon-precomposed.png" rel="apple-touch-icon-precomposed" sizes="57x57" />
                <link href="/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />

                {/* Manifest.json */}
                <link href="/manifest.json" rel="manifest" />

                {/* Essential META Tags */}

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:type" content={type} />
                <meta property="og:url" content={urlWeb} />

                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:card" content={image} />
                <meta name="twitter:image:alt" content={altImage} />


                {/* Non-Essential, But Recommended */}
                <meta property="og:site_name" content="Himapala River Guide" />

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
    image: '/meta-logo.png',
    altImage: "logo",
    keywords: 'mapala, unesa, himapala, river guide, rafting, ekspedisi',
    description: 'Himpunan Mahasiswa Pencinta Alam Universitas Negeri Surabaya.',
    urlWeb: "https://hmpl-river-guide.vercel.app",
    type: "website"
}

export default Meta