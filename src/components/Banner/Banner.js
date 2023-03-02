import "./Banner.css";

export const Banner = () => {
    // JSX
    // Parece que é html mas não é
    // o React va entender o que está aqui e vai fazer um append no dom
    return (
        <header className="banner">
            <img src="/images/banner.png" alt="banner principal da página do organo" />
        </header>
    );
}
