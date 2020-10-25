import Typography from 'typography'

const bodyFontFamily = ['Raleway', 'serif'];

const typography = new Typography({
    baseFontSize: "16px",
    googleFonts: [{
            name: 'Kadwa',
            styles: [
                '700'
            ],
        },
        {
            name: 'Raleway',
            styles: [
                '400',
                '400i',
                '700',
                '700i',
                '900'
            ],
        }
    ],
    headerFontFamily: ['Raleway', 'sans-serif'],
    bodyFontFamily: bodyFontFamily,
    overrideStyles: () => ({
        '.btn': {
            fontFamily: bodyFontFamily.join(',')
        }
    })
});
export default typography;