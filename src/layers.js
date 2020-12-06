

export const aspectLayers = [
    {
        name: 'Midnight Blue',
        layer: (window.aspectlayerMidnightBlue = new TopoLayer({
            topotype: 'aspect',
            customization: {
                colors: [
                    '#303E73',
                    '#7A85AD',
                    '#515E90',
                    '#172557',
                    '#07123A',
                    '#164A5B',
                    '#75CFEC',
                    '#172557',
                    '#303E73',
                ],
                continuous: true,
            },
        })),
    },

];