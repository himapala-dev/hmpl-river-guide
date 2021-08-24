import Head from 'next/head'

const Meta = ({ title, keywords, description, image }) => {
    return (
        <Head>
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
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Himapala Unesa',
    image: '/images/meta-logo.png',
    keywords: 'mapala, unesa, himapala, river guide, rafting, ekspedisi',
    description: 'Himpunan Mahasiswa Pencinta Alam Universitas Negeri Surabaya.',
}

export default Meta