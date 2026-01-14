import {useParams} from "react-router-dom";
import {adidasArr, type AdidasItem} from "./Adidas";
import {pumaArr, type PumaItem} from "./Puma";

type CrossModels = {
    [key: string]: (AdidasItem[] | PumaItem[])
}

const crossModels: CrossModels = {
    adidas: adidasArr,
    puma: pumaArr,
}

export const Model = () => {
    const params = useParams();

    let model;
    if (params.brand === 'adidas') {
        model = crossModels[params.brand].find(item => item.id === Number(params.id));
    } else if (params.brand === 'puma') {
        model = crossModels[params.brand].find(item => item.id === Number(params.id));
    }

    if (!model) {
        return <div>Модель не найдена</div>;
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h2>{model.model}</h2>
            <h4>{model.collection}</h4>
            <h3>{model.price}</h3>
            <img src={model.picture}
                 alt={model.model}
                 style={{width: '600px', height: 'auto', marginRight: '10px'}}/>
        </div>

    );
};
