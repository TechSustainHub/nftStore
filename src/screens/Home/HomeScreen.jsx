import { SectionAboutUs, SectionHero, SectionHowTo, SectionMarket, SectionPopulerCollection, SectionTopCollection, SectionTopCreator } from "./subScreens"


const HomeScreen = () => {
    return (
        <div>
            <SectionHero />
            <SectionHowTo />
            <SectionMarket />
            <SectionPopulerCollection />
            <SectionTopCreator />
            <SectionTopCollection />
            <SectionAboutUs />
        </div>
    )
}

export default HomeScreen