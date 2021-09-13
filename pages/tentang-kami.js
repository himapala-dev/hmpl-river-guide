import Meta from '../components/Meta';
import CustomLink from '../components/CustomLink';
import Image from '../components/Image';
import RightArrow from '/public/icons/arrow-right.svg'

export default function TentangKami() {
    return (
        <>
            <Meta title="Tentang Himapala Unesa" description="Tentang Kami || Himpunan Mahasiswa Pencinta Alam Universitas Negeri Surabaya" />
            <div className="container">
                <h1>HIMAPALA UNESA</h1>
                <p>Adanya kecintaan terhadap alam yang terwujud dalam berbagai kegiatan di tengah alam, sekelompok mahasiswa IKIP Surabaya, pada tanggal 13 Januari 1978 di puncak Gunung Welirang mendirikan sebuah organisasi yang bernama Himpunan Mahasiswa Pencinta Alam Keluarga Mahasiswa IKIP Surabaya. (Prolog).</p>

                <p>Sengaja sejarah dan perkembangan Himapala Unesa ini diangkat dalam platform ini, karena kami berfikir bahwa Anda-lah nanti sebagai pemegang tongkat estafet kepemimpinan Himapala yang nanti diharapkan dapat menjaga kelesatarian Himapala sepanjang masa. Orang mengatakan anggota yang berjiwa besar adalah anggota yang mengerti sejarah organisasinya.</p>

                <p>Kami juga berfikir bahwa setelah Anda resmi menjadi anggota Himapala pertama-tama yang perlu Anda sadari adalah kemana Anda melangkah, dimana Anda berdiri, dengan siapa Anda berbicara, dimana Anda tertawa dan berteriak, disitulah Himapala berada. Sosok Himapala adalah diri Anda. Runtuh dan bertahannya Himapala terletak pada prilaku Saudara sebagai anggota.</p>

                <p>Bagaimana Anda mengartikan Himapala?  Bagaimana Anda menterjemahkan Himapala dalam jiwa Anda? Apakah Himapala hanya sekedar tempat penampungan mahasiswa Unesa yang mempunyai minat dan bakat yang sama? Ataukah Himapala tempat menggodok mahasiswa yang tangguh, yang peka terhadap lingkungan, sosial, agama, budaya? Ataukah yang lainnya. Semua ini berpulang pada diri Anda sendiri.</p>

                <p>Nah, disitulah sebetulnya titik tumpu perkembangan dan sejarah Himapala ini kami berikan kepada Anda agar nantinya Anda sebagai anggota benar-benar tahu “apa dan bagaimana Himapala itu” dan Anda pun melangkah dengan tegar dan santai.</p>

                <div className="contentBtnContainer">
                    <CustomLink href="/tentang-kami/sejarah">
                        <a><button className="btn-secondary">
                            Selanjutnya
                            <Image
                                src={RightArrow}
                                alt="right-arrow"
                                sprite="sprite"
                            /></button></a>
                    </CustomLink>
                </div>
            </div>
        </>
    )
}

TentangKami.layout = "docs"
