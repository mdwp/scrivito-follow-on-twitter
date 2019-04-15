import * as Scrivito from 'scrivito';


Scrivito.provideEditingConfig('TwitterFollowWidget', {
    title: 'Twitter follow button',
    attributes: {

        twitter: {
            title: 'Twitter Name',
            description: 'Name on Twitter e.g. "scrivito" '
        },
    },
    properties: [
        'twitter',
    ],

});