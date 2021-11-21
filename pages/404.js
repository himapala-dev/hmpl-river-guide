import { useRouter } from 'next/router';
import Image from '../components/Image';
import Navbar from '../components/Navbar';
import { Icons } from '../public';
import Buttons from '../components/Button';

export default function Custom404() {
    const router = useRouter()
    return (
        <>
            <Navbar />
            <div className="container text-center h-100">
                <h1>Oops!!</h1>
                <p>Halaman Tidak Ditemukan!</p>
                <p>404 error</p>
                <Buttons className="btn-secondary center" onClick={() => router.back()} title="Kembali" >
                    <Image
                        src={Icons.ArrowLeft}
                        alt="left-arrow"
                        sprite="sprite"
                        className="btnImgLeft"
                    />
                </Buttons>
            </div>
        </>
    )
}