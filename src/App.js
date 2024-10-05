// список услуг для отображения в разных Section
import Section from "./components/sections/Section";
import InfoBlock from "./components/info-block/InfoBlock";
import InfoList from "./components/cards/list/InfoList";
import MoreButton from "./components/buttons/more/MoreButton";
import LinksList from "./components/links/LinksList";
import {useState} from "react";

const services = [
    {type: "услуги", description: "H.Lorem ipsum dolor sit amet."},
    {type: "услуги", description: "F.Lorem ipsum dolor sit amet."},
    {type: "услуги", description: "Z.Lorem ipsum dolor sit amet."},
    {type: "услуги", description: "L.Lorem ipsum dolor sit amet."},
    {type: "услуги", description: "L.Lorem ipsum dolor sit amet."},
    {type: "услуги", description: "A.Lorem ipsum dolor sit amet."},
]

// данные для Section - банер
const bannerSection = {
    title: {
        text: "Морской порт",
        level: 2
    },
    content: {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
            "A animi consequuntur dolorum eos ipsum laborum magnam porro quibusdam quis sequi!",
        color: "blue"
    }
}

// данные для Section - основное содержимое
const mainContentSection = {
    title: {
        text: "Услуги",
        level: 1
    }, // h1
    content: {
        text: "Полезные ссылки",
        color: "black"
    }, // черный цвет
}

const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "20px"
}


const buttonContainer = {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0'
}

function App() {

    const [dataServices, setDataServices] = useState(services)

    function handleSort() {
        const copyData = [...services].sort((a, b) => {
            if (a.description < b.description) return -1;
            if (a.description > b.description) return 1;
            return 0;
        })
        setDataServices(copyData)
    }

    return (
        <div>
            <Section gridStyle={grid}>
                <InfoBlock title={bannerSection.title}
                           content={bannerSection.content}>
                    <MoreButton text="О компании"/>
                </InfoBlock>
                <InfoList data={services.slice(0, 4)} gridStyle={grid}/>
            </Section>
            <hr/>
            <div style={buttonContainer}>
                <button onClick={handleSort}>Sort</button>
            </div>
            <Section gridStyle={grid}>
                <InfoBlock title={mainContentSection.title}
                           content={mainContentSection.content}>
                    <LinksList/>
                </InfoBlock>
                <InfoList data={dataServices} gridStyle={grid}/>
            </Section>
        </div>
    );
}

export default App;