import GooglePlayBadge from "../../assets/GooglePlayBadge.tsx";
import Header from "../../pages/Header.tsx";
import Footer from "../../pages/Footer.tsx";

export default function GoogleRegister() {
    return (
        <>
            <Header />
            <div>
                <hr/>
                If you're a tester already, click here to download
                <GooglePlayBadge/>

                Otherwise, click <a href={"https://docs.google.com/forms/d/e/1FAIpQLScshoo57VvAiHa8leGyNtTXuP0QYZvtS-vXmvs2RNvS9-Cfgw/viewform?usp=sharing&ouid=116134953133028191627"}>here to submit your email address</a> to be accepted ASAP.
            </div>
            <Footer/>
        </>
    );
}