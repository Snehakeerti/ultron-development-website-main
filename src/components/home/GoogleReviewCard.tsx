import googleImg from "@/assets/google-logo.png";
import ultronLogo from "@/assets/round-logo.png";

export default function GoogleReviewCard() {

    return (

        <div className="glass-card p-6 rounded-xl">

            <div className="flex items-start gap-3">

                <img
                    src={ultronLogo}
                    className="w-12 h-12 rounded-full"
                />

                <div>
                    <h3 className="font-semibold leading-snug">
                        Ultron Computers - Laptop Service Center in Coimbatore, Gandhipuram for HP, Lenovo, Sony, DELL, Asus, Acer and Apple brands
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Computer repair service in Coimbatore, Tamil Nadu
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
                <span className="text-2xl font-bold">
                    4.9
                </span>

                <div className="flex text-orange-400">
                    ★★★★★
                </div>
            </div>

            <p className="text-sm text-muted-foreground mt-1">
                Based on 1761 reviews
            </p>

            <a
                href="https://www.google.com/search?sca_esv=c4d249cb81caf092&sxsrf=ANbL-n4reK-RxPvsJuayiNPNcgP8Saxq-g:1775195151559&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZheavjssfEvKvojxfxoJEl_g4pQPJObU2xrAXLhfC8C3uQ340VGgHaJI9YTKYKrcYJK3GL8R_oxRxiIkyMT0cx7Kr0GZHtEDj5RK0y9TGudDnMg2CAlofLkw9UekuNspNKAdzvLUnB_L0EFUSHzQrCjnNRQ-gItT7rGs3NY31eVrufbrO6dvtIzdLFYd6SZPe3NKyjmhJjmXIuJaGNw2U2TahYjzl5PdpUUT7AMfe36HbfRww%3D%3D&q=Ultron+Computers+-+Laptop+Service+Center+in+Coimbatore,+Gandhipuram+for+HP,+Lenovo,+Sony,+DELL,+Asus,+Acer+and+Apple+brands+Reviews&sa=X&ved=2ahUKEwiSramj_dCTAxWiX2wGHb-XEw0Q0bkNegQIMRAH&biw=1280&bih=559&dpr=1.5"
                target="_blank"

                className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-m"
            >
                Review Us On
                <img
                    src={googleImg}
                    className="w-4"
                />
            </a>
        </div>
    );
}