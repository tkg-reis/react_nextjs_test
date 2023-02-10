import Header from "components/header";
import Footer from "components/footer";

export default function Layout({ children }) {
    return (
        <>
        <Header />
            {/* heroの部分を挟むことで効率的な作業が可能になる　（ここでいうchildrenはheroに該当する） */}
            <main>{children}</main>
        <Footer />
        </>
    )
}