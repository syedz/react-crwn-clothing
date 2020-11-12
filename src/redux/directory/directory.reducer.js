const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://media.istockphoto.com/photos/hipster-handsome-male-model-with-beard-wearing-black-blank-baseball-picture-id858160968?k=6&m=858160968&s=612x612&w=0&h=G5MpiYq_n9WFWb2Qu0cY7858HOUb2LwZREKWo-fCpxo=',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://media.istockphoto.com/photos/young-man-hiking-in-rain-with-waterproof-jacket-picture-id904659086?k=6&m=904659086&s=612x612&w=0&h=zVisQHjar3gtBZJoisdr8Dasl8_hR6owCr_93t35mCE=',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://media.istockphoto.com/photos/close-up-shot-of-runners-shoes-picture-id1148822167?k=6&m=1148822167&s=612x612&w=0&h=8QIF8XmPZrVoIo8TiU31smtwVt2y2r5U3cuEegI6iLY=',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://media.istockphoto.com/photos/row-of-shirts-hanging-on-rack-picture-id580115620?k=6&m=580115620&s=612x612&w=0&h=2ezA_nG18GQL-4PCGVrnfkFR35gHP4QL1li-M8nplQE=',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?k=6&m=887360960&s=612x612&w=0&h=E6deaCnCx1tXsSlWrDoaUQDrdg9tdk1CZlfR-AEZGwg=',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;