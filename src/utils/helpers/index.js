import data from '../../core/mockData/mock';

function filterByCate(id: string) {
    return data.data.category.find(idx => idx.id === id);

}


export { filterByCate };
